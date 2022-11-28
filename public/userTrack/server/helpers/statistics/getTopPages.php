<?php
    // Safety first
    include '../../login.php';
    include '../segments/withSegment.php';
   
    $domain = $_POST["domain"]; 

    $query = "
      SELECT ust_clientpage.page as url, t1.count FROM 
      (
        SELECT MIN(ust_clientpage.id) as pageid, COUNT(*) AS COUNT FROM `ust_clients` 
        USE INDEX(`ust_clients_first_date_idx`)
              INNER JOIN `ust_clientpage`
                ON ust_clientpage.clientid = ust_clients.id
                AND ust_clients.domain = :domain
                $segmentAfterWhereQueries
              GROUP BY page_hash
              ORDER BY count DESC
              LIMIT 10
      ) t1
      INNER JOIN `ust_clientpage` on t1.pageid = ust_clientpage.id";

      $stmt = $db->prepare($query);
      $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
      bindSegmentAfterWhereQueries($stmt);
      $stmt->execute();

      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
