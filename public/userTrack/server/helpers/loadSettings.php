<?php

    require_once '../login.php';

    $query = "SELECT value FROM `ust_meta` WHERE `key`='TRACKING_SETTINGS'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $settings = $stmt->fetch(PDO::FETCH_COLUMN);

    if (!$settings) {
        echo 'ERROR: Invalid tracking settings!';
    }

    echo $settings;

