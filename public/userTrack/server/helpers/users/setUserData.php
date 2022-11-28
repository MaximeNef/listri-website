<?php
/**
 * Update a user's username, password or level
 * @HTTP POST //actually update
 * @param {String} dataType
 * @param {String} value
 * @param {Int} userId
 */
require_once '../../login.php';
require_once '../../permissions.php';
require_once '../../lib/generateSecureToken.php';

// Get data from POST
$thatUserId = strtolower($_POST['userId']);
$dataType = strtolower($_POST['dataType']);
$value = $_POST['value'];

// Different permissions if user trries to change his own data
if ($userId == $thatUserId) {
    try {checkPermission('SET_OWN_USER_DATA');} catch (Exception $e) {die($e->getMessage());}
} else {
    try {checkPermission('SET_USER_DATA');} catch (Exception $e) {die($e->getMessage());}
}

// Make sure users who can set own data can't also change their levels
if ($dataType == 'level') {
    try {checkPermission('SET_USER_LEVEL');} catch (Exception $e) {die($e->getMessage());}
}

// SQL injection protection
$allowedColumns = array('name', 'password', 'level');
if (!in_array($dataType, $allowedColumns)) {
    die('Unknown data type.');
}

// Encrypt password
$saltUpdate = '';
if ($dataType == 'password') {
    $salt = generateSecureToken(12, 'chars');
    $saltUpdate = ', salt = :salt ';
    $value = hash('sha256', $salt . $value);
}

$query = "UPDATE ust_users SET $dataType = :value $saltUpdate WHERE id = :thatUserId";
$stmt = $db->prepare($query);
$stmt->bindValue(':value', $value, PDO::PARAM_STR);
isset($salt) && $stmt->bindValue(':salt', $salt, PDO::PARAM_STR);
$stmt->bindValue(':thatUserId', $thatUserId, PDO::PARAM_INT);
$stmt->execute();
