<?php

/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Only a valid userTrack license holder should have access to this file
 * Proprietary and confidential
 * Written by Cristian Buleandră <cristian@usertrack.net>, Fri 16 April 2021
 */

require_once '../../lib/generateSecureToken.php';

// Store a new valid CSRF token
// At any point the user might have multiple CSRF tokens active (to avoid request race conditions)
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
$csrf = generateSecureToken(16, 'chars');
$_SESSION['UST_CSRF_TOKEN_' . $csrf] = 1;
echo $csrf;
?>
