<?php
    // Safety first
    include '../../login.php';
    include '../segments/withSegment.php';
    $dateGroupBy = 'first_date';
    include './withDateInterval.php';
   
    // Get domain, POST
    $domain =  $_POST["domain"]; 

    $query = "SELECT DATE_FORMAT(MIN(first_date), $dateFormat) as date, ROUND(AVG(TIMESTAMPDIFF(MINUTE, `first_date`, `last_date`)), 1) as value
              FROM `ust_clients` 
              WHERE domain = :domain
              $segmentAfterWhereQueries
              GROUP BY $dateGroupBy";

      $stmt = $db->prepare($query);
      $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
      bindSegmentAfterWhereQueries($stmt);
      $stmt->execute();

      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
?>