<?php

/**
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Only a valid userTrack license holder should have access to this file
 * Proprietary and confidential
 * Written by Cristian Buleandră <cristian@usertrack.net>, Fri  April 2021
 */

include '../../login.php';

$clientID = $_POST['clientID'];

$query = '
    SELECT t1.id as id, category, action, label, value, value_secondary, item_id, t1.date as date, page, data
    FROM `ust_client_event` t1 
    LEFT JOIN `ust_clientpage` ON t1.`clientpageid` = ust_clientpage.`id`
    WHERE t1.`clientid` = :clientID
';

$stmt = $db->prepare($query);
$stmt->bindValue(":clientID", $clientID, PDO::PARAM_INT);
$stmt->execute();

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
