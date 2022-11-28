<?php
    include __DIR__  . '/../login.php';

    // Get all domains that this user has access to including total visitors tracked and limit set
    $query = "SELECT 
                ust_access.domain as `name`, 
                IFNULL(ust_limits.record_limit, 100000) as `visitorsLimit`,
                counts.cnt as `visitorsCount`
              FROM ust_access 
              LEFT JOIN ust_limits on ust_access.domain = ust_limits.domain
              LEFT JOIN (
                  SELECT domain, COUNT(*) as cnt FROM ust_clients
                  GROUP BY domain
              ) AS counts on ust_access.domain = counts.domain
              WHERE userid = :userid
              GROUP BY ust_access.domain";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':userid', $userId, PDO::PARAM_INT);
    $stmt->execute();
    
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($res);
