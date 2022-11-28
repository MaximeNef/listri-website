<?php
// Get IP
if (!empty($_SERVER['HTTP_X_SUCURI_CLIENTIP'])) {
    $tmpip = $_SERVER['HTTP_X_SUCURI_CLIENTIP'];
} else if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
    $tmpip = $_SERVER['HTTP_CF_CONNECTING_IP'];
} else if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $tmpip = $_SERVER['HTTP_CLIENT_IP'];
} else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $tmpip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $tmpip = $_SERVER['REMOTE_ADDR'];
}

$remote_addr = explode(",", $tmpip);
$remote_addr = trim($remote_addr[0]);

// Fix for IPv6 ::1 (localhost)
if ($remote_addr == '::1') {
    $remote_addr = '127.0.0.1';
}

?>