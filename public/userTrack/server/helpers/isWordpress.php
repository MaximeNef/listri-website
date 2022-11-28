<?php

function isWordPress() {
    try {
        return file_exists(__DIR__ . '/../../../wp-usertrack.php');
    } catch (Exception $e) {
        return false;
    }
}

?>