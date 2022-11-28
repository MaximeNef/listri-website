<?php
// Safety first
include '../../login.php';
include '../segments/withSegment.php';

// Get domain, POST
$domain =  $_POST["domain"];

$query = "SELECT
              COUNT(CASE WHEN pagesVisited <= 1 THEN 1 END) as '1',
              COUNT(CASE WHEN pagesVisited = 2 THEN 1 END) as '2',
              COUNT(CASE WHEN pagesVisited = 3 THEN 1 END) as '3',
              COUNT(CASE WHEN pagesVisited = 4 THEN 1 END) as '4',
              COUNT(CASE WHEN pagesVisited = 5 THEN 1 END) as '5',
              COUNT(CASE WHEN pagesVisited BETWEEN 6 AND 10 THEN 1 END) as '6-10',
              COUNT(CASE WHEN pagesVisited > 10 THEN 1 END) as '11+'
              FROM (
                SELECT COUNT(*) as pagesVisited
                FROM ust_clientpage as t1
                  INNER JOIN `ust_clients`
                  ON t1.clientid = ust_clients.id
                  AND ust_clients.domain = :domain
                  $segmentAfterWhereQueries
                GROUP BY t1.clientid
              ) t3";

$stmt = $db->prepare($query);
$stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
bindSegmentAfterWhereQueries($stmt);
$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
