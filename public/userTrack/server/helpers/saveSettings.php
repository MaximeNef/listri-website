<?php
    require_once '../login.php';
    require_once '../permissions.php';
  
    try { checkPermission('CHANGE_SETTINGS'); } catch(Exception $e) { die($e->getMessage());}

    // WordPress fix if it adds slashes
    $_POST = array_map('stripslashes', $_POST);

    $settingsJSON = $_POST['settings'];
    $settings = json_decode($settingsJSON);

    $query = "INSERT INTO ust_meta (`key`, `value`) 
                VALUES('TRACKING_SETTINGS', :settings) 
                ON DUPLICATE KEY UPDATE `value` = VALUES(value)";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':settings', $settingsJSON, PDO::PARAM_STR);
    $ok = $stmt->execute();

    if (!$ok) {
        var_dump($stmt->errorInfo());
        die('ERROR: Could not update settings!');
    }

    include 'updateTrackerFile.php';