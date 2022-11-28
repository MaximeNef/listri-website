<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$destination_file = "../ust.min.js";

clearstatcache();
// The first time we generate the minified file, do it before we login, after setup
if(file_exists($destination_file) && filesize($destination_file) !== 0) {
    require_once  __DIR__ .'/../login.php';
    require_once __DIR__ .'/../permissions.php';
    try {checkPermission('CHANGE_SETTINGS');} catch (Exception $e) {die($e->getMessage());}
}

require_once __DIR__ .'/../lib/Minifier.php';

/*** Minify tracker.js contents and save it as ust.min.js ***/
$filename = '../tracker.js';
$contents = file_get_contents($filename);

// Replace settings with the one stored in the $settings variable (should always be set before this file is included)
$contents = str_replace('settings: {}', "settings: JSON.parse('".json_encode($settings)."')", $contents);
$minified = \JShrink\Minifier::minify($contents);

file_put_contents($destination_file, $minified);
