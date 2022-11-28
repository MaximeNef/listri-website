<?php
/*
 * Copyright (C) TIPS4DESIGN SRL - All Rights Reserved
 * Unauthorized copying of this file or any parts of it, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Cristian Buleandră <support@usertrack.net>, Wed Jun 03 2020
 */

    /**
     * Associative array containing the minimum user level required for specific actions.
     */
    $LEVELS = array(
        // Admin permissions, 5 is the highest level
        'ADD_USER' => 5,
        'DELETE_USER' => 5,
        'SET_USER_DATA' => 5,
        'SET_USER_LEVEL' => 5,
        'CHANGE_DOMAIN_ACCESS' => 5,
        'GET_USERS_LIST' => 5,
        'UPDATE_PLATFORM' => 5,
        'SET_LICENSE_KEY' => 5,
        'CHANGE_DASHBOARD_SETTINGS' => 5,

        'VIEW_DB_STATS' => 4,
        'SET_OWN_USER_DATA' => 4,
        'UPDATE_AB_TESTS' => 4,

        'CHANGE_SETTINGS' => 3,
        'REMOVE_TAG' => 3,
        'ADD_TAG' => 3,
        'SET_RECORD_LIMIT' => 3 ,
        'CHECK_LICENSE_KEY' => 3,
        
        'DELETE_RECORDED_CLIENT' => 2,

        'SHARE_RECORDING' => 1,
    );

    /**
     * Checks whether the current logged in user has permission to do the given $action
     * @param  String $action The name of the permission to check
     * @throws Exception
     */
    function checkPermission($action) {
        global $LEVELS;
        global $level;
        if(!array_key_exists($action, $LEVELS) || $level < $LEVELS[$action]) throw new Exception("You do not have permissions to [$action]!");
    }
?>
