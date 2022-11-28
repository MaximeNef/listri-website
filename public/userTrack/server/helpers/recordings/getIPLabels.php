<?php
  /**
   * Returns the list of all ip labels created by the given user
   * @global $userId (from login.php)
   */
  require_once '../../login.php';

  $query = "SELECT ip, label FROM `ust_user_client_ip_label` WHERE userid = :userID";
  $stmt = $db->prepare($query);
  $stmt->bindValue(':userID', $userId, PDO::PARAM_INT);
  $stmt->execute();

  echo json_encode($stmt->fetchAll(PDO::FETCH_KEY_PAIR));
?>