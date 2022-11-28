<?php
/**
 *  Limit number of stored records for the current domain
 */

// For internal use
$skipCheck = false;
if (!isset($included)) {
    include '../login.php';
} else {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    $now = microtime(true);
    // Don't delete again next 10 minutes
    if (isset($_SESSION['last_limit_check']) && $now - $_SESSION['last_limit_check'] < 300) {
        $skipCheck = true;
    }
    $_SESSION['last_limit_check'] = $now;
}

if (!$skipCheck) {

    // Get domain, POST
    $domain = $_POST["domain"];

    // Get the limit
    $query = "SELECT record_limit FROM `ust_limits`
                    WHERE domain = :domain";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->execute();

    $limit = 100000;
    $domainLimit = $stmt->fetchColumn();
    if ($domainLimit !== false) {
        $limit = $domainLimit;
    }

    // Get current count
    $query = "SELECT COUNT(*) FROM `ust_clients`
                    WHERE domain = :domain";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->execute();

    $count = $stmt->fetchColumn();

    if ($count > $limit) {
        $toRemove = $count - $limit;

        // Get clients to be deleted
        $query = "DELETE FROM `ust_clients`
                        WHERE domain = :domain
                        ORDER BY id ASC
                        LIMIT :limit";

        $clientsStmt = $db->prepare($query);
        $clientsStmt->bindValue(':domain', $domain, PDO::PARAM_STR);
        $clientsStmt->bindValue(':limit', $toRemove, PDO::PARAM_INT);
        $clientsStmt->execute();
    }
}
