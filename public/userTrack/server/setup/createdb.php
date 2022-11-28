<?php

require_once '../dbconfig.php';
require_once '../lib/generateSecureToken.php';

// Create table queries
$query = array();

$query[] = "CREATE TABLE IF NOT EXISTS `ust_clients` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `domain` varchar(128) NOT NULL,
    `token` char(16) NOT NULL,
    `ip` varchar(64) NOT NULL,
    `browser` varchar(32) NOT NULL,
    `referrer` varchar(2083) DEFAULT NULL,
    `referrer_domain` varchar(255) DEFAULT NULL,
    `device_type` tinyint(11) NOT NULL DEFAULT '0',
    `public_key` char(12) DEFAULT NULL,
    `country` char(2) NOT NULL DEFAULT 'XX',
    `first_date` datetime NOT NULL,
    `last_date` datetime NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `token` (`token`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_clientpage` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `date` datetime NOT NULL,
    `last_activity` datetime NOT NULL,
    `page` varchar(2083) NOT NULL,
    `page_hash` BINARY(16) DEFAULT NULL,
    `resolution` varchar(16) NOT NULL,
    `clientid` int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_clientpage` FOREIGN KEY (`clientid`) REFERENCES ust_clients(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_client_tag` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `clientid` int(11) unsigned NOT NULL,
    `tag` varchar(128) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UQ_clientid_tag` (`clientid`, `tag`),
    CONSTRAINT `FK_tag_clients` FOREIGN KEY (`clientid`) REFERENCES ust_clients(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_client_event` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `clientid` int(11) unsigned NOT NULL,
    `clientpageid` int(11) unsigned NOT NULL,
    `category` varchar(128) NOT NULL DEFAULT 'GLOBAL',
    `action` varchar(128) NOT NULL,
    `label` varchar(128),
    `value` DECIMAL(15, 2),
    `value_secondary` DECIMAL(15, 2),
    `item_id` varchar(128),
    `data` text,
    `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`),
    CONSTRAINT `FK_event_clients` FOREIGN KEY (`clientid`) REFERENCES ust_clients(`id`) ON DELETE CASCADE,
    CONSTRAINT `FK_event_clientpage` FOREIGN KEY (`clientpageid`) REFERENCES ust_clientpage(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_clicks` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `client` int(11) unsigned NOT NULL,
    `data` text NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_clicks` FOREIGN KEY (`client`) REFERENCES ust_clientpage(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_movements` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `client` int(11) unsigned NOT NULL,
    `data` text NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_movements` FOREIGN KEY (`client`) REFERENCES ust_clientpage(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_records` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `record` text NOT NULL,
    `client` int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_records` FOREIGN KEY (`client`) REFERENCES ust_clientpage(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_partials` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `record` text NOT NULL,
    `client` int(11) unsigned NOT NULL UNIQUE,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_partials` FOREIGN KEY (`client`) REFERENCES ust_clientpage(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

// Partials start at a high ID so we know if it's a final or partial recording based on ID
$query[] = "ALTER TABLE `ust_partials` AUTO_INCREMENT=1000000000";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_users` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(32) NOT NULL UNIQUE,
    `password` char(64) NOT NULL,
    `salt` char(12) NOT NULL,
    `level` tinyint(3) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_access` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `userid` int(11) unsigned NOT NULL,
    `domain` varchar(128) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `FK_access` FOREIGN KEY (`userid`) REFERENCES ust_users(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_meta` (
    `key` varchar(32) NOT NULL UNIQUE,
    `value` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;";

// Default settings
$defaultSettings = '{"enableSessionRecordings":true, "enableMobileTracking":true,"static":true,"delay":200,"percentangeRecorded":100,"recordClickHeatmaps":true,"recordKey":true,"recordMoveHeatmaps":true,"serverPath":"/userTrack/server/","ignoreGET":["utm_source","utm_ccc_01","gclid","utm_campaign","utm_medium","fbclid"],"ignoreIPs":["66.249.66.*"],"censorIP":true,"hashIP":true,"respectDoNotTrack":false,"showTrackingConsent":false, "encodeUriData": false}';
$query[] = "INSERT IGNORE into `ust_meta` (`key`, `value`) VALUES('TRACKING_SETTINGS', '$defaultSettings')";
if (isset($chosenPass) && $chosenPass && strlen($chosenPass) > 5) {
    $defaultPass = $chosenPass;
    $salt = generateSecureToken(12, 'chars');
    $encryptedPass = hash('sha256', $salt . $defaultPass);
    $query[] = "INSERT IGNORE INTO `ust_users` (`id`, `name`, `password`, `salt`, `level`) VALUES
        (1, 'admin', '$encryptedPass', '$salt', 5);";
}

$query[] = "CREATE TABLE IF NOT EXISTS `ust_limits` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `domain` varchar(128) NOT NULL,
    `record_limit` int(11) unsigned NOT NULL DEFAULT '100000',
    PRIMARY KEY (`id`),
    UNIQUE KEY `domain` (`domain`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_ab` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `domain` varchar(128) NOT NULL,
    `test_name` varchar(128) NOT NULL,
    `test_data` text NOT NULL,
    `enabled` TINYINT(1) NOT NULL DEFAULT 1,
    `published` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_user_client_watched` (
    `userid` int(11) unsigned NOT NULL,
    `clientid` int(11) unsigned NOT NULL,
    PRIMARY KEY (`userid`, `clientid`),
    CONSTRAINT `FK_userid_user_client_watched` FOREIGN KEY (`userid`) REFERENCES ust_users(`id`) ON DELETE CASCADE,
    CONSTRAINT `FK_clientid_user_client_watched` FOREIGN KEY (`clientid`) REFERENCES ust_clients(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;";

$query[] = "CREATE TABLE IF NOT EXISTS `ust_user_client_ip_label` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `userid` int(11) unsigned NOT NULL,
    `ip` varchar(64) NOT NULL,
    `label` varchar(128) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `userid_ip` (`ip`, `userid`),
    CONSTRAINT `FK_userid_user_client_ip_label` FOREIGN KEY (`userid`) REFERENCES ust_users(`id`) ON DELETE CASCADE
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 ;";

// Execute all queries
foreach ($query as $q) {
    $db->query($q);
}

// Add missing column queries if updating from an older version
$update = array();

// Add new columns
$update[] = "ALTER TABLE `ust_clients` MODIFY `ip` VARCHAR(64)";
$update[] = "ALTER TABLE `ust_clientpage` ADD `page_hash` BINARY(16) DEFAULT NULL"; // v3.3.1
$update[] = "ALTER TABLE `ust_clients` ADD `referrer_domain` VARCHAR(255) DEFAULT NULL"; // v3.3.2

// Populate new columns
$update[] = "UPDATE `ust_clientpage` SET page_hash=UNHEX(MD5(page)) WHERE page_hash IS NULL";
$update[] = "UPDATE `ust_clients` SET referrer_domain=REPLACE(SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(referrer, '/', 3), '://', -1), '/', 1), '?', 1), 'www.', '') WHERE referrer_domain IS NULL AND referrer IS NOT NULL";

// Add indexes
$update[] = "ALTER TABLE `ust_clients` ADD INDEX `domain_idx` (`domain`)";
$update[] = "ALTER TABLE `ust_clients` ADD INDEX `referrer_idx` (`referrer`(255))";
$update[] = "ALTER TABLE `ust_clients` ADD INDEX `ust_clients_first_date_idx` (`first_date`)";
$update[] = "ALTER TABLE `ust_clients` ADD INDEX `ust_clients_last_date_idx` (`last_date`)";
$update[] = "ALTER TABLE `ust_clientpage` ADD INDEX `clientpage_date_idx` (`date`)";
$update[] = "ALTER TABLE `ust_clients` ADD INDEX `ust_clients_domain_first_date_idx` (`domain`, `first_date`)"; // v3.3.1
$update[] = "ALTER TABLE `ust_clientpage` ADD INDEX `ust_clientpage_page_hash_idx` (`page_hash`)"; // v3.3.1
$update[] = "ALTER TABLE `ust_clients` ADD INDEX `ust_clients_ip_idx` (`ip`)"; // v3.3.2
$update[] = "ALTER TABLE `ust_clients` ADD INDEX `ust_clients_referrer_domain_idx` (`referrer_domain`)"; // v3.3.2
$update[] = "ALTER TABLE `ust_clientpage` ADD INDEX `ust_clientpage_clientid_page_hash_idx` (`clientid`, `page_hash`)"; // v3.3.2
/* v3.5.0 */
$update[] = "ALTER TABLE `ust_client_event`
                ADD INDEX `date_idx` (`date`),
                ADD INDEX `category_idx` (`category`),
                ADD INDEX `action_idx` (`action`),
                ADD INDEX `label_idx` (`label`),
                ADD INDEX `value_idx` (`value`),
                ADD INDEX `value_secondary_idx` (`value_secondary`),
                ADD INDEX `item_id_idx` (`item_id`)
                "; 

foreach ($update as $q) {
    try { $db->query($q);} catch (Exception $e) {}
}
