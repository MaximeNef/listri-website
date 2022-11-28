<?php

include '../../login.php';
require_once '../../permissions.php';
try {checkPermission('SET_LICENSE_KEY');} catch (Exception $e) {die($e->getMessage());}

$license = $_POST['license'];

$query = "INSERT INTO `ust_meta` (`key`, `value`) VALUES('LICENSE', :license)
          ON DUPLICATE KEY UPDATE `value`=VALUES(`value`)";
$stmt = $db->prepare($query);
$stmt->bindValue(':license', $license, PDO::PARAM_STR);
$ok = $stmt->execute();

if (!$ok) {
    die('ERROR: Could not set license');
}
?>