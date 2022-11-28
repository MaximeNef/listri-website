<?php
    // Safety first
    include '../../login.php';
    include '../segments/withSegment.php';

    // Get domain, POST
    $domain = @$_POST["domain"]; 

    $query = "SELECT 
      COUNT(*) as visitors 
      ,SUM(client_pageviews) as pageviews 
      ,ROUND(AVG(TIMESTAMPDIFF(SECOND, `first_date`, `last_date`)), 0) as sessionLength
      ,FLOOR(
          SUM(IF(client_pageviews <= 1, 1, 0)) / GREATEST(1, COUNT(*)) * 100
      ) AS bounceRate
    FROM
    ( SELECT  
        COUNT(DISTINCT ust_clients.id) as perf_optimization,
        COUNT(ust_clientpage.id) as client_pageviews
        ,first_date, last_date
          FROM `ust_clients`
          USE INDEX(`ust_clients_first_date_idx`)
          INNER JOIN `ust_clientpage`
          ON ust_clientpage.clientid = ust_clients.id AND ust_clients.domain = :domain
            $segmentAfterWhereQueries
          GROUP BY ust_clients.id
      ) t1
      ";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    bindSegmentAfterWhereQueries($stmt);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode(array_map('floatval', $result));
?>
