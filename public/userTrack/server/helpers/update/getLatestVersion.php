<?php
require_once '../isWordpress.php';
$wp = isWordpress();

$LATEST_VERSION_URL = 'https://raw.githubusercontent.com/userTrack/update-integrity-check/master/latest-version';

if ($wp) {
    $LATEST_VERSION_URL .= '-wp';
}

// Cache breaker for github latest version
$LATEST_VERSION_URL .= '?r=' . rand(0, 32768);

echo trim(file_get_contents($LATEST_VERSION_URL));
?>