<?php

/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Only a valid userTrack license holder should have access to this file
 * Proprietary and confidential
 * Written by Cristian Buleandră <cristian@usertrack.net>, Sun 16 May 2021
 */

function updateLogoFromDB()
{
    global $db;
    $query = "SELECT value FROM `ust_meta` WHERE `key`='DASHBOARD_SETTINGS'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $settings = $stmt->fetch(PDO::FETCH_COLUMN);

    if (!$settings) {
        return false;
    }

    $settingsObj = json_decode($settings, true);
    $base64 = $settingsObj['LOGO'];

    if (!$base64) {
        unlink(__DIR__ . '/logo.png');
        return false;
    }

    $bin = base64_decode(str_replace('data:image/png;base64,', '', $base64));

    return file_put_contents(__DIR__ . '/logo.png', $bin);
}
?>