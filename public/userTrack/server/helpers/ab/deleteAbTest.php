<?php
require_once '../../login.php';
require_once '../../permissions.php';
try { checkPermission('UPDATE_AB_TESTS'); } catch(Exception $e) { die($e->getMessage());}

$testID = $_POST["testID"];

$query = "DELETE FROM `ust_ab` WHERE id = :testID";
$stmt = $db->prepare($query);
$stmt->bindValue(':testID', $testID, PDO::PARAM_INT);
$stmt->execute();

// TODO: Update JS AB testing file for this domain: ab/domain.js
?>
