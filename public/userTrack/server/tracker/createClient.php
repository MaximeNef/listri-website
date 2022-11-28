<?php

include '../dbconfig.php';
require_once '../helpers/getCountryFromIP.php';

// Cross-domain request
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type');

$userResolution = $_POST['r'];
$token = $_POST['t'];
$path = urldecode($_POST['u']);
$domain = $_POST['d'];
$referrer = @$_POST['s'];
$deviceType = $_POST['v'];
$hashIP = isset($_POST['hip']) ? $_POST['hip'] : FALSE;

$clientPageID = $_POST['i'];

if (is_numeric($clientPageID) && $clientPageID != 0) {
    // Delete partial recording for previous page
    $query = "DELETE FROM ust_partials WHERE client = :clientPageID";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':clientPageID', $clientPageID, PDO::PARAM_INT);
    $stmt->execute();
}

// Validate input
if ($path == '' || $path == null || $path == 'null') {
    die('Invalid page url');
}

// See if client already exists based on the token
$query = "SELECT id FROM `ust_clients`
                WHERE token = :token
                AND domain = :domain";

$stmt = $db->prepare($query);
$stmt->bindValue(':token', $token, PDO::PARAM_STR);
$stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
$stmt->execute();

$result = $stmt->fetch();
$clientID = $result ? $result['id'] : false;

function ua_is_bot($ua) {
    $botPattern = "/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/";
    return preg_match($botPattern, $ua);
}

// If we don't already have a client, create it
if ($clientID === false) {
    /* ******************************
     * Get client IP
     * ******************************/
    require_once __DIR__ . '/../lib/remote_addr.php';

    /* ******************************
     * Get browser info
     * ******************************/
    $browser = array(
        'version' => '0.0.0',
        'majorver' => 0,
        'minorver' => 0,
        'build' => 0,
        'name' => 'unknown',
        'useragent' => '',
    );

    $browsers = array(
        'edge', 'trident', 'opr', 'chrome', 'firefox', 'msie', 'safari', 'mozilla', 'seamonkey', 'konqueror', 'netscape',
        'gecko', 'navigator', 'mosaic', 'lynx', 'amaya', 'omniweb', 'avant', 'camino', 'flock', 'aol',
    );

    $UA = 'not-set';
    if (isset($_SERVER['HTTP_USER_AGENT'])) {
        
        $browser['useragent'] = $UA = $_SERVER['HTTP_USER_AGENT'];

        // Bot filtering
        if (ua_is_bot($UA)) {
            die('Invalid UA');
        }
        
        $user_agent = strtolower($browser['useragent']);
        foreach ($browsers as $_browser) {
            if (preg_match("/($_browser)[\/ ]?([0-9.]*)/", $user_agent, $match)) {
                $browser['name'] = $match[1];
                $browser['version'] = $match[2];
                @list($browser['majorver'], $browser['minorver'], $browser['build']) = explode('.', $browser['version']);
                break;
            }
        }
    }

    if ($browser['name'] == 'edge') {
        $browser['name'] = 'msie';
    }

    if ($browser['name'] == 'trident') {
        if (preg_match("/rv:([0-9.]*)/", $user_agent, $match)) {
            $browser['name'] = 'msie';
            $browser['majorver'] = $match[1] | 0;
        }

    }
    if ($browser['name'] == 'opr') {
        $browser['name'] = 'opera';
    }

    $browser = $browser['name'] . ' ' . $browser['majorver'];

    // Set referrer to empty string if not found
    if (!isset($referrer)) {
        $referrer = '';
    }

    $ip = $hashIP && $hashIP != 'false' ? substr(hash('sha256', $remote_addr . $UA), 16, 32) : $remote_addr;

    // Create a new client
    $query = "INSERT INTO `ust_clients` (DOMAIN, TOKEN, IP, BROWSER, REFERRER, REFERRER_DOMAIN, DEVICE_TYPE, COUNTRY, FIRST_DATE, LAST_DATE)
                             VALUES (:domain, :token, :ip, :browser, :referrer,
                             REPLACE(SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(:referrer2, '/', 3), '://', -1), '/', 1), '?', 1), 'www.', ''),
                             :deviceType, :countryCode, NOW(), NOW())";

    $stmt = $db->prepare($query);
    $stmt->bindValue(':domain', $domain, PDO::PARAM_STR);
    $stmt->bindValue(':token', $token, PDO::PARAM_STR);
    $stmt->bindValue(':ip', $ip, PDO::PARAM_STR);
    $stmt->bindValue(':browser', $browser, PDO::PARAM_STR);
    $stmt->bindValue(':referrer', $referrer, PDO::PARAM_STR);
    $stmt->bindValue(':referrer2', $referrer, PDO::PARAM_STR);
    $stmt->bindValue(':deviceType', $deviceType, PDO::PARAM_INT);
    $stmt->bindValue(':countryCode', getCountryFromIP($remote_addr), PDO::PARAM_STR);
    $stmt->execute();

    // Get the ID of the newly inserted value
    $clientID = $db->lastInsertId();
}

// Now that we have the client, we need to add a new clientPage and get its ID
$query = "INSERT INTO `ust_clientpage` (DATE, LAST_ACTIVITY, PAGE, PAGE_HASH, RESOLUTION, CLIENTID)
                    VALUES (NOW(), NOW(), :page, UNHEX(MD5(:page_copy)), :resolution, :clientid)";

$stmt = $db->prepare($query);
$stmt->bindValue(':page', $path, PDO::PARAM_STR);
$stmt->bindValue(':page_copy', $path, PDO::PARAM_STR);
$stmt->bindValue(':resolution', $userResolution, PDO::PARAM_STR);
$stmt->bindValue(':clientid', $clientID, PDO::PARAM_INT);
$stmt->execute();

$clientPageID = $db->lastInsertId();

$res = array(
    'clientID' => $clientID,
    'clientPageID' => $clientPageID,
);

echo json_encode($res);
