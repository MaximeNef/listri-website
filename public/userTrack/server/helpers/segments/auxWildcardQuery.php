<?php
// Removes leading and trailing "*"
function removeWildcards($str) {
    // If we only have wildcards, don't do anything
    if ($str === '*' || $str === '**') {
        return $str;
    }
    if (substr($str, 0, 1) === '*') {
        $str = substr($str, 1);
    }
    if (substr($str, -1, 1) === '*') {
        $str = substr($str, 0, -1);
    }
    return $str;
}

// Converts wildcard string to SQL LIKE query
// *needle* -> LIKE %:varName%
// PDO binds :varName -> needle
// Note: It actually returns 'LIKE CONCAT ("%", :varName, "%")' to avoid syntax errors
function isLIKEQuery($wildcardString) {
    return substr($wildcardString, 0, 1) === '*' || substr($wildcardString, -1, 1) === '*';
}
function getLIKEQueryFromWildcard($wildcardString, $PDOVariableName) {
    $likeParts = array($PDOVariableName);
    if (substr($wildcardString, 0, 1) === '*') {
        array_unshift($likeParts, "'%'");
    }
    if (substr($wildcardString, -1, 1) === '*') {
        array_push($likeParts, "'%'");
    }
    return " LIKE CONCAT (" . implode(', ', $likeParts) . ")";
}
?>