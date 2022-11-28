<?php
    require_once '../login.php';
    require_once '../permissions.php';
    try { checkPermission('DELETE_RECORDED_CLIENT'); } catch(Exception $e) { die($e->getMessage());}

    $clientID = $_POST['clientID'];

    $query = "DELETE FROM ust_clients WHERE id = :clientid";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':clientid', $clientID, PDO::PARAM_INT);
    $stmt->execute();
?>