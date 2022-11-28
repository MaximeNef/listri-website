<?php
require_once '../../login.php';
require_once '../../permissions.php';
try {checkPermission('UPDATE_AB_TESTS');} catch (Exception $e) {die($e->getMessage());}

// WordPress fix if it adds slashes
$_POST = array_map('stripslashes', $_POST);

$domain = $_POST["domain"];
$testName = $_POST["testName"];
$testData = $_POST["testData"];

$query = "INSERT INTO `ust_ab` (domain, test_name, test_data) VALUES(:domain, :testName, :testData)";
$stmt = $db->prepare($query);
$stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
$stmt->bindValue(':testName', $testName, PDO::PARAM_STR);
$stmt->bindValue(':testData', $testData, PDO::PARAM_STR);
$stmt->execute();
?>
