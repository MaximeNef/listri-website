<?php
    // Safety first
    include '../../login.php';
    include '../segments/withSegment.php';
    $dateGroupBy = 'first_date';
    include './withDateInterval.php';
   
    // Get domain, POST
    $domain =  $_POST["domain"]; 

    $query = "SELECT DATE_FORMAT(MIN(`first_date`), $dateFormat) as date, COUNT(*) as value 
              FROM `ust_clients` 
              USE INDEX(`ust_clients_domain_first_date_idx`)
              WHERE domain = :domain
              $segmentAfterWhereQueries
              GROUP BY $dateGroupBy
              ";

      $stmt = $db->prepare($query);
      $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
      bindSegmentAfterWhereQueries($stmt);
      $stmt->execute();

      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
?>