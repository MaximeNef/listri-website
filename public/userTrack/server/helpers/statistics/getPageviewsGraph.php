<?php
    // Safety first
    include '../../login.php';
    include '../segments/withSegment.php';
    $dateGroupBy = 'first_date';
    include './withDateInterval.php';
   
    // Get domain, POST
    $domain =  $_POST["domain"]; 

    $query = "SELECT cdate as date, value FROM (
                SELECT DATE_FORMAT(MIN(ust_clients.first_date), $dateFormat) as cdate, 
                count(*) as value
                FROM `ust_clients`
                USE INDEX(`ust_clients_first_date_idx`)
                INNER JOIN `ust_clientpage`
                  ON ust_clientpage.clientid = ust_clients.id AND ust_clients.domain = :domain
                  $segmentAfterWhereQueries
                GROUP BY $dateGroupBy
              ) t2";

      $stmt = $db->prepare($query);
      $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
      bindSegmentAfterWhereQueries($stmt);
      $stmt->execute();

      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
?>