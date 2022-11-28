<?php
    require_once '../../login.php';
    require_once '../../permissions.php';

    try { checkPermission('ADD_TAG'); } catch(Exception $e) { die($e->getMessage());}

    // Here's the argument from the client.
    $clientID     = $_POST['clientID'];
    $tagContent   = $_POST['tagContent'];

    $query = "INSERT IGNORE INTO `ust_client_tag` (clientid, tag) VALUES (:clientID, :tagContent)";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':clientID', $clientID, PDO::PARAM_INT);
        $stmt->bindValue(':tagContent', $tagContent, PDO::PARAM_STR);
        $stmt->execute();
?>
