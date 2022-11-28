<?php
    // Safety first
    include '../../login.php';
    include '../segments/withSegment.php';
   
    $domain = $_POST["domain"];
    
    $query = "SELECT 
              country,
              COUNT(*) as count 
              FROM `ust_clients`
              USE INDEX(`ust_clients_first_date_idx`)
              WHERE domain = :domain
              $segmentAfterWhereQueries
              GROUP BY country
              ORDER BY count DESC
              LIMIT 10
              ";

      $stmt = $db->prepare($query);
      $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
      bindSegmentAfterWhereQueries($stmt);
      $stmt->execute();

      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
