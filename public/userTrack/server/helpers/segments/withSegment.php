<?php
/**
 * Segment filtering.
 *
 * Scrip to be included internally.
 * It exposes PDO queries for retrieving clients based on the given segment information.
 *
 * Each filter, defined by filterName, should expose:
 * ${filterName}Query - Variable containing the SQL string to be concatenated in the parent query
 * bind{filterName}Params($stmt) - Function to bind PDO params needed for this filtering
 */

require_once __DIR__ . '/auxWildcardQuery.php';

/**
 * Date filters
 */
$startDate = @$_POST['startDate'];
$endDate = @$_POST['endDate'];
$dateQuery = $startDate != '' && $endDate != '' ? " AND CAST(`first_date` AS DATE) BETWEEN CAST(:startDate AS DATE) AND CAST(:endDate as DATE) " : '';
function bindDateParams($stmt) {
    global $dateQuery;
    global $startDate;
    global $endDate;

    if ($dateQuery == '') {
        return;
    }

    $stmt->bindValue(':startDate', $startDate, PDO::PARAM_STR);
    $stmt->bindValue(':endDate', $endDate, PDO::PARAM_STR);
}

/**
 * Tags filters
 */
$tagFilters = @$_POST['tagFilters'];
$tagsQuery = '';
if ($tagFilters && $tagFilters != NULL && count($tagFilters) > 0) {

    $tagsQuery = ' AND ust_clients.id IN (';

    foreach ($tagFilters as $i => $tag) {
        $tagsQuery .= " SELECT DISTINCT clientid from ust_client_tag WHERE `tag` = :tag$i ";

        if ($i !== count($tagFilters) - 1) {
            $tagsQuery .= " AND clientid IN ( ";
        }
    }

    // Close parentheses
    for ($i = 1; $i < count($tagFilters); ++$i) {
        $tagsQuery .= ')';
    }

    $tagsQuery .= ')';
}

function bindTagsParams($stmt) {
    global $tagFilters;
    // Bind tags
    if ($tagFilters && $tagFilters !== NULL && count($tagFilters) > 0) {
        foreach ($tagFilters as $i => $tag) {
            $stmt->bindValue(":tag$i", $tag, PDO::PARAM_STR);
        }
    }
}

/**
 * Pages filter
 *
 */
$pagesFilter = @$_POST['pagesFilter'];
$pagesQuery = '';
if ($pagesFilter && $pagesFilter != NULL && count($pagesFilter) > 0) {

    $pagesQuery = ' AND ust_clients.id IN (';

    foreach ($pagesFilter as $i => $page) {
        $tempQuery = "UNHEX(MD5(:page$i)) = page_hash";
        if (isLIKEQuery($page)) {
            $likeQuery = getLIKEQueryFromWildcard($page, ":page$i");
            $tempQuery = "page $likeQuery";
        }
        $pagesQuery .= " SELECT DISTINCT clientid from ust_clientpage WHERE $tempQuery";

        if ($i !== count($pagesFilter) - 1) {
            $pagesQuery .= " AND clientid IN ( ";
        }
    }

    // Close parentheses
    for ($i = 1; $i < count($pagesFilter); ++$i) {
        $pagesQuery .= ')';
    }

    $pagesQuery .= ')';
}
function bindPagesParam($stmt) {
    global $pagesQuery;
    global $pagesFilter;

    if ($pagesQuery == '') {
        return;
    }

    // Remove *startAndEndWildCards*
    foreach ($pagesFilter as $i => $page) {
        $page = removeWildcards($page);
        $stmt->bindValue(":page$i", $page, PDO::PARAM_STR);
    }
}

/**
 * Referrer filters
 */
$referrers = @$_POST['referrers'];
$referrersQuery = '';
if ($referrers && $referrers != NULL && count($referrers) > 0) {

    $isWildcardQuery = false;

    // Check if any referrer has a wildcard in it
    // Limitation, when using wildcards, we can't use domain-based referrer search (only wildcards or full path)
    foreach ($referrers as $r) {
        $isWildcardQuery |= strpos($r, '*') !== false;
        if ($isWildcardQuery) {
            break;
        }
    }

    if ($isWildcardQuery) {
        // If we are using wildcards
        // ... AND (ust_clients.referrer LIKE %val1 OR ust_clients.referrer LIKE %val2%)...
        $referrersQuery .= " AND (";

        $lastIndex = count($referrers) - 1;
        foreach ($referrers as $i => $referrer) {
            $likeQuery = getLIKEQueryFromWildcard($referrer, ":referrer$i");
            $referrersQuery .= " ust_clients.referrer $likeQuery";
            if ($i != $lastIndex) {
                $referrersQuery .= " OR ";
            }
        }
        $referrersQuery .= ') ';
    } else {
        // Full URL if specific path given
        if (strpos($referrers[0], '/') !== false) {
            $referrersQuery .= " AND ust_clients.referrer IN(";
        }
        // Only domain if no path given
        else {
            // Where domainName(referrer) in given referrers array
            $referrersQuery .= " AND ust_clients.referrer_domain IN(";
        }
        $lastIndex = count($referrers) - 1;
        foreach ($referrers as $i => $referrer) {
            $referrersQuery .= ":referrer$i";
            if ($i != $lastIndex) {
                $referrersQuery .= ', ';
            }
        }
        $referrersQuery .= ') ';
    }
}
function bindReferrerParams($stmt) {
    global $referrersQuery;
    global $referrers;

    if ($referrersQuery == '') {
        return;
    }

    // Remove *startAndEndWildCards*
    foreach ($referrers as $i => $referrer) {
        $referrer = removeWildcards($referrer);
        $stmt->bindValue(":referrer$i", $referrer, PDO::PARAM_STR);
    }
}

/**
 * Countries filters
 */
$countries = @$_POST['countries'];
$countriesQuery = '';
if ($countries && $countries != NULL && count($countries) > 0) {
    // Where country in given countries array
    $countriesQuery .= ' AND country IN(';
    $lastIndex = count($countries) - 1;
    foreach ($countries as $i => $country) {
        $countriesQuery .= ":country$i";
        if ($i != $lastIndex) {
            $countriesQuery .= ', ';
        }
    }
    $countriesQuery .= ') ';
}
function bindCountriesParams($stmt) {
    global $countriesQuery;
    global $countries;

    if ($countriesQuery == '') {
        return;
    }

    foreach ($countries as $i => $country) {
        $stmt->bindValue(":country$i", $country, PDO::PARAM_STR);
    }
}

/**
 * IP filters
 * Currently can only filter for a single IP (not a list of IPs)
 */
$ipFilter = @$_POST['ipFilter'];
$ipQuery = '';
if ($ipFilter && $ipFilter != NULL) {
    $ipQuery = ' AND ip = :ip';
}

function bindIPParams($stmt) {
    global $ipFilter;
    // Bind IP
    if ($ipFilter && $ipFilter != NULL) {
        $stmt->bindValue(":ip", $ipFilter, PDO::PARAM_STR);
    }
}

/**
 * Filter by MIN/MAX session length, both are optional
 */
$sessionLengthFilterMin = @$_POST['sessionLengthFilterMin'];
$sessionLengthFilterMax = @$_POST['sessionLengthFilterMax'];
$sessionLengthQuery = '';
if (($sessionLengthFilterMin && $sessionLengthFilterMin != NULL) || ($sessionLengthFilterMax && $sessionLengthFilterMax != NULL)) {
    if (!isset($sessionLengthFilterMin) || $sessionLengthFilterMin === NULL) {
        $sessionLengthFilterMin = 0;
    }

    if (!isset($sessionLengthFilterMax) || $sessionLengthFilterMax === NULL) {
        $sessionLengthFilterMax = 999999999;
    }

    $sessionLengthQuery = ' AND TIMESTAMPDIFF(SECOND, ust_clients.first_date, ust_clients.last_date) BETWEEN :sessionLengthMin AND :sessionLengthMax ';
}

function bindSessionLengthParams($stmt) {
    global $sessionLengthQuery;
    global $sessionLengthFilterMax;
    global $sessionLengthFilterMin;

    // Bind Session length
    if ($sessionLengthQuery) {
        $stmt->bindValue(":sessionLengthMin", $sessionLengthFilterMin, PDO::PARAM_INT);
        $stmt->bindValue(":sessionLengthMax", $sessionLengthFilterMax, PDO::PARAM_INT);
    }
}

// Merge all queries into a single string for easier usage
$segmentAfterWhereQueries = $dateQuery
    . $ipQuery
    . $sessionLengthQuery
    . $referrersQuery
    . $countriesQuery
    . $pagesQuery
    . $tagsQuery;
function bindSegmentAfterWhereQueries($stmt) {
    bindDateParams($stmt);
    bindIPParams($stmt);
    bindSessionLengthParams($stmt);
    bindReferrerParams($stmt);
    bindCountriesParams($stmt);
    bindPagesParam($stmt);
    bindTagsParams($stmt);
}

?>