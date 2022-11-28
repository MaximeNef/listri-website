<?php
    include '../../login.php';
    
    $domain = $_POST['domain'];
    
    $query = "SELECT DISTINCT 
             REPLACE(SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(referrer, '/', 3), '://', -1), '/', 1), '?', 1), 'www.', '') AS referrerDomain
             FROM `ust_clients`
             WHERE domain = :domain
             AND referrer != ''
             ORDER BY referrerDomain asc
             ";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->execute();
    
    $res = $stmt->fetchAll(PDO::FETCH_COLUMN);
    array_unshift($res, 'DIRECT');
    echo json_encode($res);
?>