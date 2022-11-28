<?php
    include '../../login.php';
    
    $domain = $_POST['domain'];
    
    $query = "SELECT DISTINCT 
             country
             FROM `ust_clients`
             WHERE domain = :domain
             ORDER BY country ASC
             ";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->execute();
    
    $res = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo json_encode($res);
?>