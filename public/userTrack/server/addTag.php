<?php
/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Only a valid userTrack license holder should have access to this file
 * Proprietary and confidential
 * Written by Cristian Buleandră <cristian@usertrack.net>, Thu  April 2021
 */

    ob_start();
    include 'dbconfig.php';

    // Cross-domain request
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type');

    // Here's the argument from the client.
    $clientID     = $_POST['clientID'];
    $tagContent   = $_POST['tagContent'];

    $query = "INSERT IGNORE INTO `ust_client_tag` (clientid, tag) VALUES (:clientID, :tagContent)";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':clientID', $clientID, PDO::PARAM_INT);
        $stmt->bindValue(':tagContent', $tagContent, PDO::PARAM_STR);
        $stmt->execute();
    ob_end_clean();
?>
