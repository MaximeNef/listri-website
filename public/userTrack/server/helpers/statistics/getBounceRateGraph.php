<?php
    // Safety first
    include '../../login.php';
    include '../segments/withSegment.php';
    include './withDateInterval.php';

    // Get domain, POST
    $domain = $_POST["domain"];

    $query = "SELECT
                DATE_FORMAT(MIN(DATE(t3.date)), $dateFormat) as date,
                FLOOR(SUM(if(pagesVisited <= 1, 1, 0)) / GREATEST(1, COUNT(*)) * 100) as value
                FROM 
                (
                    SELECT first_date as date, 
                    COUNT(DISTINCT ust_clients.id) as perf_improvement,
                    COUNT(*) as pagesVisited
                    FROM `ust_clients`
                    USE INDEX(`ust_clients_first_date_idx`)
                    INNER JOIN `ust_clientpage`
                    ON ust_clientpage.clientid = ust_clients.id AND ust_clients.domain = :domain
                    $segmentAfterWhereQueries
                    GROUP BY ust_clients.id
                ) t3 
            GROUP BY $dateGroupBy";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    bindSegmentAfterWhereQueries($stmt);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
?>
