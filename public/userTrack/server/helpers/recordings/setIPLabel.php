<?php
  /**
   * Sets the given `label` for the given `ip` only for the currently logged in `userID`
   * @global $userId (from login.php)
   */
  require_once '../../login.php';

  $ip = $_POST['ip'];
  $label = @$_POST['label'];

  if (!isset($label) || $label == '') {
    $query = "DELETE FROM `ust_user_client_ip_label` WHERE userid = :userID AND ip = :ip";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':userID', $userId, PDO::PARAM_INT);
    $stmt->bindValue(':ip', $ip, PDO::PARAM_STR);
    $stmt->execute();
    die();
  }

  $query = "INSERT INTO `ust_user_client_ip_label` (userid, ip, label) VALUES(:userID, :ip, :label)
            ON DUPLICATE KEY UPDATE label = :newLabel";
          
  $stmt = $db->prepare($query);
  $stmt->bindValue(':userID', $userId, PDO::PARAM_INT);
  $stmt->bindValue(':ip', $ip, PDO::PARAM_STR);
  $stmt->bindValue(':label', $label, PDO::PARAM_STR);
  $stmt->bindValue(':newLabel', $label, PDO::PARAM_STR);
  $stmt->execute();
?>