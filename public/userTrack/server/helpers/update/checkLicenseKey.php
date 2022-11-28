<?php

include '../../login.php';
require_once '../../permissions.php';
try {checkPermission('CHECK_LICENSE_KEY');} catch (Exception $e) {die($e->getMessage());}

$license = @$_POST['license'];

if (!isset($license)) {
    $query = "SELECT value FROM `ust_meta` WHERE `key`='LICENSE'";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $license = $stmt->fetch(PDO::FETCH_COLUMN);
}

if (!isset($license) || !$license || strlen($license) < 10) {
    die('false');
}

require_once '../isWordpress.php';
$wp = isWordpress();

$LICENSE_CHECK_URL = 'https://license-api.usertrack.net/download?license=' . $license . '&check';
if ($wp) {
    $LICENSE_CHECK_URL .= '&variant=wp';
}

$res = trim(file_get_contents($LICENSE_CHECK_URL));

if ($res !== 'true') {
    die('false');
}

die('true');
?>