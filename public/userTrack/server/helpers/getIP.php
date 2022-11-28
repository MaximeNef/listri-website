<?php
/**
 * Returns the IP of the current user, the value is wrapped as a JS asignment to the ust_myIP variable
 **/

require_once __DIR__ . '/../lib/remote_addr.php';

header('Content-type: application/javascript');
echo "ust_myIP='$remote_addr';";
?>
