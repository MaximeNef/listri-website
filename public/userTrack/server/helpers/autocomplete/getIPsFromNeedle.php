<?php
    include '../../login.php';
    
    $domain = $_POST['domain'];
    $partialIP = $_POST['partialIP'];
    
    $query = "SELECT DISTINCT IP FROM `ust_clients`
              WHERE domain = :domain"
              . ($partialIP ? ' AND ip LIKE :partialIP ' : '') .
              " LIMIT 10";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    if ($partialIP) {
        $stmt->bindValue(':partialIP', "%$partialIP%", PDO::PARAM_STR);
    }
    $stmt->execute();
    
    $res = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo json_encode($res);
?>