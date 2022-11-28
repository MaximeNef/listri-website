<?php
require_once '../../login.php';

$domain = $_POST["domain"];

$query = "SELECT id, test_name as name, test_data as data, enabled, published FROM `ust_ab` WHERE `domain` = :domain";
$stmt = $db->prepare($query);
$stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);
?>
