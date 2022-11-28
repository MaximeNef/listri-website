<?php

/**
 * Group by date day, week or month
 */
$dateInterval = @$_POST["dateInterval"];

$formats = array(
    "HOUR" => "'%Y-%m-%d %H:00'",
    "DAY" => "'%Y-%m-%d'",
    "WEEK" => "'%Y-%m-%d'",
    "MONTH" => "'%Y-%m-01'",
);

// If $dateGroupByexists use the given value, used when `date` is aliased in the query
if (!isset($dateGroupBy)) {
    $dateGroupBy = 'date';
}

$dateFormat = $formats['DAY'];

if (isset($dateInterval)) {
    $dateFormat = $formats[$dateInterval];
    switch ($dateInterval) {
        default:
        case 'DAY':
            $dateGroupBy = "DATE($dateGroupBy)";
            break;
        case 'MONTH':
            $dateGroupBy = "DATE_FORMAT($dateGroupBy, '%Y-%m')";
        break;
        case 'HOUR':
            $dateGroupBy = "DATE_FORMAT($dateGroupBy, " . $dateFormat . ")";
            break;

        case 'WEEK':
            $dateGroupBy = "DATE_FORMAT($dateGroupBy, '%Y-%U')";
        break;
    }
}

?>