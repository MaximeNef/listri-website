<?php

/**
 * Big thanks to https://www.maxmind.com/ for publicly offering the GeoLite database and Reader functions
 **/

if(!class_exists('\MaxMind\Db\Reader')){
    require_once __DIR__ . '/' . 'geolocation/Reader.php';
}

if (!class_exists('MaxMind\Db\Reader\Decoder')) {
    require_once __DIR__ . '/' . 'geolocation/Reader/Decoder.php';
}

if (!class_exists('MaxMind\Db\Reader\InvalidDatabaseException')) {
    require_once __DIR__ . '/' . 'geolocation/Reader/InvalidDatabaseException.php';
}

if (!class_exists('MaxMind\Db\Reader\Metadata')) {
    require_once __DIR__ . '/' . 'geolocation/Reader/Metadata.php';
}

if (!class_exists('MaxMind\Db\Reader\Util')) {
    require_once __DIR__ . '/' . 'geolocation/Reader/Util.php';
}

use MaxMind\Db\Reader;
$mmdb= 'GeoLite2-Country.mmdb';
$reader = new Reader( __DIR__  . '/geolocation/' . $mmdb );

function getCountryFromIP($ip) {
    global $reader;

    try {
        $ipData = $reader->get($ip);
        return $ipData ? $ipData['country']['iso_code'] : 'XX';
    } catch(Exception $e) {
        return 'XX';
    }
}
