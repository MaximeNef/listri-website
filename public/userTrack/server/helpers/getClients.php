<?php
    include '../login.php';
    include '../lib/array_column.php';

    // Limit clients before displaying them
    $included = 1;
    include 'limitRecordNumber.php';
    
    $from        = @$_POST['from'];
    $take        = @$_POST['take'];
    $domain      = $_POST['domain'];
    $order       = @$_POST['order'];

    include 'segments/withSegment.php';

    // Ordering
    $order = $order == '' || $order == "DESC" ? "DESC" : "ASC";
    
    // Pagination
    if($from == '') {
        $from = 0;
        $take = 6;
    }

    // Count total users for this domain
    $countQuery = "SELECT COUNT(*) FROM ust_clients USE INDEX(ust_clients_domain_first_date_idx)"
                ." WHERE domain = :domain"
                .$segmentAfterWhereQueries;
    $countQueryStmt = $db->prepare($countQuery);
    bindSegmentAfterWhereQueries($countQueryStmt);
    $countQueryStmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $countQueryStmt->execute();
    $totalCount = $countQueryStmt->fetchColumn();

    /**
     * Get all clients that match the current filters
     */
    $query = "SELECT ust_clients.*
            ,TIME_TO_SEC(TIMEDIFF(last_date, first_date)) as `time_spent` 
            ,GROUP_CONCAT(DISTINCT ttag.tag ORDER BY ttag.id ASC) as `tags`
            ,GROUP_CONCAT(tclientpage.page ORDER BY ttag.tag ASC, tclientpage.id ASC SEPARATOR '#') as `pageHistory`
            ,IFNULL(MIN(tclientpage.id), -1) as `first_clientpage_id`
            ,IFNULL(MIN(tclientpage.resolution), '0 0') as `resolution`
            ,COUNT(DISTINCT tuserclientwatched.userid) as `watched`
            ,COUNT(DISTINCT tevent.id) as `eventsCount`
            FROM ust_clients
            LEFT JOIN ust_client_tag ttag ON ttag.clientid = ust_clients.id
            LEFT JOIN ust_client_event tevent ON tevent.clientid = ust_clients.id
            LEFT JOIN ust_clientpage tclientpage ON tclientpage.clientid = ust_clients.id
            LEFT JOIN ust_user_client_watched tuserclientwatched ON tuserclientwatched.clientid = ust_clients.id AND tuserclientwatched.userid = :userid
            WHERE domain = :domain
            $segmentAfterWhereQueries
            GROUP BY ust_clients.id
            ORDER BY ust_clients.id $order
            LIMIT :from, :take";

    $clientsStmt = $db->prepare($query);

    // Bind domain
    $clientsStmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    bindSegmentAfterWhereQueries($clientsStmt);
    $clientsStmt->bindValue(':userid', $userId, PDO::PARAM_INT);

    // Bind pagination
    $clientsStmt->bindValue(':from', $from, PDO::PARAM_INT);
    $clientsStmt->bindValue(':take', $take, PDO::PARAM_INT);
    

    $clientsStmt->execute();
    
    $cnt = $clientsStmt->rowCount();
    $data = $clientsStmt->fetchAll(PDO::FETCH_ASSOC);

    // Array to store the data to be returned
    $res = array();
    
    // Extra data processing
    foreach($data as $row){
        $clientpageID = $row['first_clientpage_id'];

        // Return mobile for mobile devices, browser name otherwise
        $browser = $row['device_type'] == 1 ? 'mobile' : $row['browser'];

        $tags = array_filter(explode(',', $row['tags']));
        $pageHistory =array_filter(explode('#', $row['pageHistory']));
       
        // HACK: GROUP_CONCAT will return pageHistory multiplied for each tag (due to the join), only return it once
        // Instead of "/home, /pricing, /home, /pricing" when two tags are given, it will return "/home, /pricing"
        // This could maybe done in MySQL using variables, but you can't use a variable twice in same select: https://stackoverflow.com/a/16715618/407650
        $joinMultipleFix = max(1, count($tags)) * max(1, $row['eventsCount']);
        if ($joinMultipleFix > 1) {
            $pageHistory = array_slice($pageHistory, 0, count($pageHistory) / $joinMultipleFix);
        }

        // Count number of total pages visited
        $pagesVisitedCount = count($pageHistory);

        // Build the object with all info for current client
        $res[] = array(
                        'date' => $row['first_date'],
                        'lastDate' => $row['last_date'],
                        'ip' => $row['ip'],
                        'country' => $row['country'],
                        'resolution' => $row['resolution'],
                        'browser' => $browser,
                        'referrer' => $row['referrer'],
                        'pageHistory' => $pageHistory,
                        'tags' => $tags,
                        'eventsCount' => $row['eventsCount'],
                        'timeSpent' => $row['time_spent'],
                        'id' => $row['id'],
                        'clientpageid' => $clientpageID,
                        'clientid' => $row['id'],
                        'pagesVisitedCount' => $pagesVisitedCount,
                        'token'=> $row['token'],
                        'watched' => $row['watched']
                );
    };

echo json_encode(array('clients' => $res, 'count' => $cnt, 'totalCount' => $totalCount));
