<?php
/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Cristian Buleandră <support@usertrack.net>, Wed Jun 03 2020
 */

$host = '127.0.0.1';
$username = 'root'; // Mysql username 
$password = ''; // Mysql password 
$db_name = 'usertrack'; // Database name 

// error_reporting(E_ERROR | E_PARSE );

$PDOconfig = array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

// Port not specified
try {
	$db = new PDO('mysql:host='.$host.';dbname='.$db_name.';charset=utf8', $username , $password, $PDOconfig);
} catch (PDOException $e) {
    
    // Given port or defualt port (3306)
    try {
      
      // Don't alter the $host variable
      $_host = $host;
      
      if(strpos($host, ':') === false) {
        $port = '3306';
        $_host .= ':'.$port;
      }
      
      $host_split =  explode(':', $_host);
      $db = new PDO('mysql:host='.$host_split[0].';dbname='.$db_name.';port='.$host_split[1].';charset=utf8', $username , $password, $PDOconfig);
    } catch (PDOException $e) {
        
        // Remove any port if it exists or extra ':'
        try {
            $_host = str_replace(':3306','',$_host);
            $_host = str_replace(':','',$_host);
            $db = new PDO('mysql:host='.$_host.';dbname='.$db_name.';charset=utf8', $username , $password, $PDOconfig);
        } 
        catch (PDOException $e) {
            echo 'Connection failed: ' . htmlentities($e->getMessage(), ENT_QUOTES | ENT_HTML5, 'UTF-8');
            $db_error = $e;
        } 
    }
}

?>