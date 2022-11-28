<?php
  /**
   * Returns a list with all pages visisted by the current client
   * @param {String} clientID - The client ID of the client to get the records for
   * @returns {JSON} - A list containing page name, time and id
   */

  include '../login.php';
  
  $clientID = $_POST['clientID'];
    
  // Get all clientPages based on the clientID
  $query = "SELECT t1.id, date, page, resolution, last_activity,
            (SELECT GROUP_CONCAT(tag) from ust_client_tag WHERE ust_client_tag.clientid = t1.clientid) as tags,
            TIME_TO_SEC(TIMEDIFF(last_activity, date)) as `time_spent`
            FROM ust_clientpage as t1
            WHERE clientid = :clientID
            ORDER BY id ASC
            ";
  $stmt = $db->prepare($query);
  $stmt->bindValue(":clientID", $clientID, PDO::PARAM_INT);
  $stmt->execute();

  $res = array();

  while($row = $stmt->fetch(PDO::FETCH_ASSOC)){

    $clientPageID = $row['id'];
    $page = $row['page'];

    // Get record ID based on clientID
    $query = "SELECT id FROM ust_records
              WHERE client = :clientPageID
              UNION
              SELECT id FROM ust_partials
              WHERE client = :clientPageID2
              ";
    $idStmt = $db->prepare($query);
    $idStmt->bindValue(":clientPageID", $clientPageID, PDO::PARAM_INT);
    $idStmt->bindValue(":clientPageID2", $clientPageID, PDO::PARAM_INT);
    $idStmt->execute();

    $idRow = $idStmt->fetch(PDO::FETCH_ASSOC);
    $id = $idRow ? $idRow['id'] : 0;

    $res[] =  array(
                'id' => $id ? $id : 0,
                'clientPageID' => $clientPageID,
                'timeSpent' => $row['time_spent'],
                'lastActivity' => $row['last_activity'],
                'tags' => $row['tags'] ? explode(',', $row['tags']) : array(),
                'page' => $page,
                'resolution' => $row['resolution'],
                'date' => $row['date'],
              );
  }

    echo json_encode($res);
