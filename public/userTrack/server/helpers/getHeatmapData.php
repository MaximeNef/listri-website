<?php
include '../login.php';
include 'segments/withSegment.php';

// Get POST Data
$page = @$_POST['page'];
if ($page == '') {
    die('Invalid page url');
}

$domainName = @$_POST['domain'];
$widthFilter = @$_POST['widthFilter'];
$what = $_POST['what'];

// Make sure domain is either set from POST or null
$domainWHERE = $domainName != '' ? "WHERE domain =:domain" : '';

// For scroll simply return movement data
$what = $what == 'scroll' ? 'movements' : $what;

// Quick SQL injection protection
if ($what !== 'movements' && $what !== 'clicks') {
    die('Unknown heatmap what data type.');
}

if (!isset($widthFilter) || $widthFilter == -1) {
    $resolution = '';
} else {
    $width = explode(" ", $widthFilter);
    $minWidth = intval($width[0]);
    $maxWidth = intval($width[1]);

    // If a resolution is set, only search by width
    $resolution = " AND SUBSTRING_INDEX(resolution, ' ', 1) > :minWidth AND SUBSTRING_INDEX(resolution, ' ', 1) < :maxWidth";
}

/**
 * Load data from database
 * @param {String} what - type of data to get (clicks/movements)
 */

// Return multiple JSONs containing resolution and count
$query = "SELECT * FROM ust_" . $what . "
                WHERE client IN (
                SELECT ID FROM ust_clientpage
                WHERE page = :page" . $resolution . "
                        AND clientid IN (
                            SELECT ust_clients.id FROM ust_clients
                            " . $domainWHERE . "
                            $segmentAfterWhereQueries
                        )
                )";

$stmt = $db->prepare($query);
if ($domainWHERE != '') {
    $stmt->bindValue(':domain', $domainName, PDO::PARAM_STR);
}

if ($resolution != '') {
    $stmt->bindValue(':minWidth', $minWidth, PDO::PARAM_INT);
    $stmt->bindValue(':maxWidth', $maxWidth, PDO::PARAM_INT);
}
$stmt->bindValue(':page', $page, PDO::PARAM_STR);
bindSegmentAfterWhereQueries($stmt);
$stmt->execute();

// TODO: Fetch_column and do a single replace
$movements = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $movements[] = preg_replace("{\\\}", "", $row['data']);
}

echo json_encode($movements);
