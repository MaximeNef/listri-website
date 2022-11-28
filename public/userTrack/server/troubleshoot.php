<?php
/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Cristian Buleandră <support@usertrack.net>, Wed Jun 03 2020
 */

// Turn off gzip compression for this response so we can send partial response back (ob_flush())
if (function_exists('apache_setenv')) apache_setenv('no-gzip', 1);
ini_set('zlib.output_compression', 0);
?>
<html>
<head>
<style>
    h1 {
        text-align: center;
    }
    body > div {
        font-family: Arial, sans-serif;
        width: 600px;
        text-align: left;
        margin: 0 auto;
    }
    </style>
</head>
<body>
<div>
<h1>userTrack troubleshoot</h1>

<?php
    /**
     * Helper tool to show if there are any connection/setup errors with userTrack.
     */

    // Turn on output buffering if necessary
    if (ob_get_level() == 0) ob_start();

    function out($string) {
        echo $string;
        ob_flush();
        flush();
    }
    function ok() {
        out(' - <b style="color: green">ok</b>');
    }

    out('<ul>');

    $err = false;
    function test($name, $testFn) {
        global $err;
        if ($err) {
            return;
        }
        
        try {
            out("<li> $name");
            ob_flush();
            $testFn();
            ok();
        } catch(Exception $e) {
            out(' <br/> <span style="color:red">' . $e->getMessage() . '</span>');
            $err = true;
        }
    }

    // Tests
    test('Database connection', function () {
        sleep(1);
        include 'dbconfig.php';
        if (isset($db_error)) {
            throw new Exception($db_error);
        }
    });

    test('Login', function () {
        sleep(1);
        if(!isset($_COOKIE["userTrackUsername"])) {
            throw new Exception('Not logged in. Please <a href="login.php">login first.</a>');
        }
        
        include 'login.php';
    });

    test('User can read domains list: ', function () {
        sleep(1);
        out('<br/><pre style="white-space: unset">');
        include 'helpers/getDomains.php';
        out('</pre><br/>');
    });

    test('Has write permissions: <b>ust.min.js</b>: ', function () {
        if (!is_writable('ust.min.js')) {
            throw new Exception('File is does not have write permissions: <b>server/ust.min.js</b>');
		}
    });

    
    test('Apache <b>(userTrack root)/.htaccess</b> file exists: ', function () {
        if (!file_exists('../.htaccess')) {
            throw new Exception('File missing: <b>(userTrack root)/.htaccess</b>');
        }
    });

    test('Apache <b>(userTrack root)/server/.htaccess</b> file exists: ', function () {
        if (!file_exists('.htaccess')) {
            throw new Exception('File missing: <b>(userTrack root)/server/.htaccess</b>');
        }
    });




    if(!$err) {
        out('<div style="font-weight: bold; background: #b7ef90; padding: 20px; border-radius: 5px"> No errors could be detected!</div>');
    } else {
        out('<div style="font-weight: bold; background: #db13a7; padding: 20px; border-radius: 5px"> Errors detected!</div>');
    }
    ob_flush();
    flush();
    ob_end_flush();
?>
</div>
</body>
</html>