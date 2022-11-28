<?php

    /*** UPDATE THE SERVER PATH ***/
    include '../dbconfig.php';
    
    $skipCSRFCheck = true;
    $query = "SELECT `value` from `ust_meta` WHERE `key` = 'TRACKING_SETTINGS'";
    $stmt = $db->prepare($query);
    $stmt->execute();

    $settings = json_decode($stmt->fetch(PDO::FETCH_COLUMN));

    // Path to this file without the file
    $path = preg_replace('#\/[^/]*$#', '', $_SERVER['REQUEST_URI']);
    
    // Set server path to current link
    $serverPath = dirname("//$_SERVER[HTTP_HOST]$path");
    $settings->serverPath = $serverPath;
    
    // Save new server path in tracking settings in DB
    $query = "INSERT INTO ust_meta (`key`, `value`) 
        VALUES('TRACKING_SETTINGS', :settings) 
        ON DUPLICATE KEY UPDATE `value` = VALUES(value)";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':settings', json_encode($settings), PDO::PARAM_STR);
    $ok = $stmt->execute();
    if (!$ok) {
        var_dump($stmt->errorInfo());
        die('ERROR: Could not update settings!');
    }

    include '../helpers/updateTrackerFile.php';

    if (@$_GET['new'] == 'true') {
        header("location: ../login.php");
    } else {
        // Also publish A/B tests so ab files are regenerated
        $_POST['domain'] = 'ALL';
        include '../helpers/ab/publishAbForDomain.php';

        header("location: ../../");
    }
?>
