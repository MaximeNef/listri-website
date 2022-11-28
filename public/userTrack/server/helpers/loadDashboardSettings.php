<?php

    //removeIf(!trial)
    $skipinvlicCheck = TRUE;
    //endRemoveIf(!trial)

    require_once '../login.php';

    $query = "SELECT value FROM `ust_meta` WHERE `key`='DASHBOARD_SETTINGS'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $settings = $stmt->fetch(PDO::FETCH_COLUMN);

    if (!$settings) {
        echo '""';
    }

    echo $settings;

