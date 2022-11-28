<?php
require_once '../../login.php';
require_once '../../permissions.php';
try { checkPermission('UPDATE_AB_TESTS'); } catch(Exception $e) { die($e->getMessage());}

// TODO: Check user has access to domain

$testID = $_POST["testID"];
$testName = $_POST["testName"];
$testEnabled = $_POST["testEnabled"];
$testData = $_POST["testData"];

$query = "UPDATE `ust_ab` SET `test_name` = :testName, `test_data` = :testData, `enabled` = :testEnabled, `published` = 0 WHERE id = :testID";
$stmt = $db->prepare($query);
$stmt->bindValue(':testID', $testID, PDO::PARAM_INT);
$stmt->bindValue(':testName', $testName, PDO::PARAM_STR);
$stmt->bindValue(':testName', $testName, PDO::PARAM_INT);
$stmt->bindValue(':testEnabled', $testEnabled, PDO::PARAM_INT);
$stmt->bindValue(':testData', $testData, PDO::PARAM_STR);
$stmt->execute();

?>
