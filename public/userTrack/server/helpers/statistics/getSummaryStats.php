<?php
    // Safety first
    include '../../login.php';
   
    // Get domain, POST
    $domain = @$_POST["domain"]; 

    // Get count of visitors:
    // * live (last 5 seconds)
    // * in last 24h (computed as rest + live)
    $query = "SELECT
              (CASE 
                WHEN (last_date >= now() - INTERVAL 5 SECOND) THEN 'live'
                WHEN (last_date >= now() - INTERVAL 1 DAY) THEN '24h'
                ELSE 'rest'
              END) AS `period`,
              COUNT(last_date) as count
              FROM `ust_clients`
              WHERE domain = :domain AND last_date >= now() - INTERVAL 2 DAY
              GROUP BY `period`
      ";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->execute();

    $data = array();
    $result = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);

    $data['visitorsYesterday'] = (@$result['rest'] | 0);
    $data['visitors24h'] = (@$result['24h'] | 0) + (@$result['live'] | 0) | 0;
    $data['visitorsOnline'] = @$result['live'] | 0;

    echo json_encode($data);
?>
