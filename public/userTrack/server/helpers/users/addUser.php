<?php
    /**
     * Add a new userTrack user from the admin dashboard
     */
    require_once '../../login.php';
    require_once '../../permissions.php';
    require_once '../../lib/generateSecureToken.php';
    
    try { checkPermission('ADD_USER'); } catch(Exception $e) { die($e->getMessage());}

    $name = $_POST['name'];
    $salt = generateSecureToken(12, 'chars');
    $pass = hash('sha256', $salt.$_POST['pass']);

    $query = "INSERT INTO ust_users(name, password, salt, level) VALUES(:name, :pass, :salt, '0')";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':name', $name, PDO::PARAM_STR);
    $stmt->bindValue(':pass', $pass, PDO::PARAM_STR);
    $stmt->bindValue(':salt', $salt, PDO::PARAM_STR);
    $stmt->execute();
?>
