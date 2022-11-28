<?php

$chosenPass = $_POST['pass'];

if (!isset($chosenPass) || !$chosenPass && $chosenPass !== '^UPDATE^') {
    header("location:../install.php");
    die();
}

include './createdb.php';
header("location:autoConfig.php?new=" . (isset($chosenPass) && $chosenPass !== '^UPDATE^' ? 'true' : 'false'));
