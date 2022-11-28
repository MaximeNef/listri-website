<?php
    /**
     * Returns all userTrack users and the domains
     * they have access to
     */
    require_once '../../login.php';
    require_once '../../permissions.php';
    
    $onlyOwn = false;
    try { 
        checkPermission('GET_USERS_LIST'); 
    } catch(Exception $e) {
        // If user is not admin, he can still get his own domains
        $onlyOwn = true;        
    }

    if($onlyOwn) {
        $query = "SELECT id, name, level FROM ust_users WHERE id = :userID";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':userID', $userId, PDO::PARAM_INT);
    } else {
        $query = "SELECT id, name, level FROM ust_users";
        $stmt = $db->prepare($query);
    }
    $stmt->execute();

    $count = 0;
    $res = array();
    for($count = 0; $user = $stmt->fetch(PDO::FETCH_ASSOC); ++$count) { 
        $res[$count] = $user;
        
        // Get domains
        $domains = array();
        $query = "SELECT domain FROM ust_access WHERE userid = :userid";
        $stmt2 = $db->prepare($query);
        $stmt2->bindValue(':userid', $res[$count]['id'], PDO::PARAM_INT);
        $stmt2->execute();

        while($domain = $stmt2->fetch(PDO::FETCH_ASSOC)){    
            $domains[] = $domain['domain'];
        }
        
        $res[$count]['domains'] = $domains;
    };

    echo json_encode($res);
