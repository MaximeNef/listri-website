<?php
/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Cristian Buleandră <support@usertrack.net>, Wed Jun 03 2020
 */

ob_start();
if (function_exists('opcache_invalidate')) {
    opcache_invalidate('dbconfig.php');
    opcache_invalidate('./view/db_setup.php');
}
include 'dbconfig.php';
ob_end_clean();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>userTrack installation</title>
    <link rel= "shortcut icon" media="all" type="image/x-icon" href="favicon.26242483.ico" />
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/setup.css">
</head>
<body>

<?php
// Step 1: Create the database
if (isset($db_error)) {

    // The form was submitted
    if (isset($_POST['db_name'])) {

        /*** Update the connection info from the form ***/
        require_once 'setup/setDbCredentials.php';
        setDbCredentials(
            $_POST['db_host'], 
            $_POST['db_name'], 
            $_POST['db_user'],
            $_POST['db_pass']
        );
        sleep(2);

        echo "<script>location.href = 'install.php'</script>";
        die();
    }

    $error_message = $db_error->getMessage();
    if (!is_writable('dbconfig.php') || !is_writable('ust.min.js')) {
        $err = "Please set write permissions (0666) for: ";
        if(!is_writable('dbconfig.php')) $err .= "<br/>dbconfig.php";
        if(!is_writable('ust.min.js')) $err .= "<br/>ust.min.js";
        
        $error_message = $err . "<br/>". $error_message;
    }

    include 'setup/view/db_setup.php';
} else {
    // Step 2: Choose default login info and create tables
    include 'setup/view/login_info.php';
}
?>
</body>
</html>
