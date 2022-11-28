<?php

/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Only a valid userTrack license holder should have access to this file
 * Proprietary and confidential
 * Written by Cristian Buleandră <cristian@usertrack.net>, Thu Apr April 2021
 */

ob_start();
include 'dbconfig.php';

// Cross-domain request
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type');

// Here's the argument from the client.
$clientID = $_POST['clientID'];
$clientPageID = $_POST['clientPageID'];
$category = $_POST['category']; // string
$action = $_POST['action']; // string
$label = @$_POST['label']; // string
$value = @$_POST['value']; // number
$value_secondary = @$_POST['value_secondary']; // number
$item_id = @$_POST['item_id']; // string
$data = @$_POST['data']; // string

$insertKeys = 'clientid, clientpageid, category, action';
$insertValues = ':clientID, :clientPageID, :category, :action';

// Non-DRY code for better perf
if (isset($label)) {
    $insertKeys .= ', label';
    $insertValues .= ', :label';
}
if (isset($value)) {
    $insertKeys .= ', value';
    $insertValues .= ', :value';
}
if (isset($value_secondary)) {
    $insertKeys .= ', value_secondary';
    $insertValues .= ', :value_secondary';
}
if (isset($item_id)) {
    $insertKeys .= ', item_id';
    $insertValues .= ', :item_id';
}
if (isset($data)) {
    $insertKeys .= ', data';
    $insertValues .= ', :data';
}


$query = "INSERT INTO `ust_client_event` ($insertKeys) VALUES ($insertValues)";
$stmt = $db->prepare($query);
$stmt->bindValue(':clientID', $clientID, PDO::PARAM_INT);
$stmt->bindValue(':clientPageID', $clientPageID, PDO::PARAM_INT);
$stmt->bindValue(':category', $category, PDO::PARAM_STR);
$stmt->bindValue(':action', $action, PDO::PARAM_STR);
if (isset($label)) {
    $stmt->bindValue(':label', $label, PDO::PARAM_STR);
}
if (isset($value)) {
    $stmt->bindValue(':value', $value, PDO::PARAM_STR);
}
if (isset($value_secondary)) {
    $stmt->bindValue(':value_secondary', $value_secondary, PDO::PARAM_STR);
}
if (isset($item_id)) {
    $stmt->bindValue(':item_id', $item_id, PDO::PARAM_STR);
}
if (isset($data)) {
    $stmt->bindValue(':data', $data, PDO::PARAM_STR);
}
$stmt->execute();
ob_end_clean();
?>
