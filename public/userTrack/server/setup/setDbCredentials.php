<?php

function sanitizeStr($string) {
    $string = str_replace("\\", "\\\\", $string);
    return var_export($string, true);
}

function setDbCredentials($db_host, $db_name, $db_user, $db_pass) {

    $dbConfigPath = __DIR__  . "/../dbconfig.php";
    // Chmod files so we can edit them using the interface
    try {
        chmod($dbConfigPath, 0755);
        exec("chmod 755 " . $dbConfigPath);
    } catch (Exception $e) {}

    // Directly edit the dbconfig.php file
    $contents = file_get_contents($dbConfigPath);

    // Database host
    $pattern = "/\\\$host = .*;/";
    $newpat = '\$host = ' . sanitizeStr($db_host) . ';';
    $contents = preg_replace($pattern, $newpat, $contents);

    // Database name
    $pattern = "/\\\$db_name = .*;/";
    $newpat = '\$db_name = ' . sanitizeStr($db_name) . ';';
    $contents = preg_replace($pattern, $newpat, $contents);

    // Username
    $pattern = "/\\\$username = .*;/";
    $newpat = '\$username = ' . sanitizeStr($db_user) . ';';
    $contents = preg_replace($pattern, $newpat, $contents);

    // Password
    $pattern = "/\\\$password = .*;/";
    $newpat = '\$password = ' . sanitizeStr($db_pass) . ';';
    $contents = preg_replace($pattern, $newpat, $contents);

    // Save the file
    file_put_contents($dbConfigPath, $contents);
}