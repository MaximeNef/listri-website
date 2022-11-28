<?php
require_once __DIR__  . '/../../login.php';
require_once __DIR__  . '/../../permissions.php';
try {checkPermission('UPDATE_AB_TESTS');} catch (Exception $e) {die($e->getMessage());}

define('UST_AB_FILE_PATH', __DIR__  . '/../../core.ab.js');
$domain = $_POST["domain"];

if (!isset($domain)) {
    echo 'Invalid domain name';
}

$abCoreJS = file_get_contents(UST_AB_FILE_PATH);

// If 'ALL' is given, publish ab files for all domains
// This is useful to regenerate ab files after an update
if ($domain == 'ALL') {
    $query = "SELECT DISTINCT `domain` FROM `ust_ab`";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $domains = $stmt->fetchAll(PDO::FETCH_COLUMN);
    foreach ($domains as $d) {
        publishAbForDomain($d);
    }
} else {
    publishAbForDomain($domain);
}

function publishAbForDomain($domain) {
    global $db, $abCoreJS;

    $query = "SELECT test_data FROM `ust_ab` where `domain` = :domain AND enabled = 1";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_COLUMN);
    $jsonTests = "'[" . implode(',', $result) . "]'";

    // Inject tests into AB test file for this domain
    $abJS = str_replace("UST.abTests = [];", "UST.abTests = JSON.parse($jsonTests);", $abCoreJS);

    require_once __DIR__  . '/../../lib/Minifier.php';
    $minifiedabJS = \JShrink\Minifier::minify($abJS);

    file_put_contents(__DIR__  . "/../../ab/$domain.ab.js", $minifiedabJS);

    $query = "UPDATE `ust_ab` SET `published` = 1 WHERE `domain` = :domain and `enabled` = 1";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->execute();
}
?>