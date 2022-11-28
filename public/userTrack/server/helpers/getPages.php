<?php
    include '../login.php';
    
    $domain = $_POST['domain'];
    $input = @$_POST['input'];

    $inputLike = isset($input) ? 'AND page LIKE CONCAT ("%", :inputLike, "%")' : '';

    // Get all distinct pages FROM ust_clients in $domain
    $query = "SELECT DISTINCT page FROM `ust_clientpage`
              WHERE clientid IN (
                  SELECT id FROM ust_clients
                  WHERE domain = :domain
              ) $inputLike
              LIMIT 50
              ";


    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    if ($inputLike !== '') {
        $stmt->bindValue(':inputLike', $input, PDO::PARAM_STR);
    } 
    $stmt->execute();
    
    $res = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    echo json_encode($res);
?>