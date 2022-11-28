<?php
    // Safety first
    require_once '../../login.php';
    require_once '../../permissions.php';
   
    try { checkPermission('VIEW_DB_STATS'); } catch(Exception $e) { die($e->getMessage());}
    
    $query = "SELECT SUM(data_length + index_length)
              FROM information_schema.TABLES
              WHERE table_schema = :dbname
              AND table_name LIKE 'ust_%'";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':dbname', $db_name, PDO::PARAM_STR);
    $stmt->execute();

    $result = $stmt->fetchColumn();

    echo $result;
 ?>