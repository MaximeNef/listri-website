<?php
$skipCSRFCheck = true;
include '../../login.php';
require_once '../../permissions.php';
try {checkPermission('UPDATE_PLATFORM');} catch (Exception $e) {die($e->getMessage());}

require_once 'xcopy.php';
require_once 'delete_files.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Update steps
// 1. Set license code (from client)
// 2. Check license code (from client)
// 3. Check for new version (from client)
// 4. Download zip archive
// 5. Check file integrity both remotely and locally
// 6. Make sure that no local data is lost (dbconfig settings, tracking settings, ab tests)
// [TODO] 4. Have a list of files to remove and remove them.
// 7. Unzip archive to a temp folder
// 8. Regenerate all files (publish AB tests, update ust.min.js)
// 9. Delete archive
// 10. DONE!

// Check requirements
if (!class_exists("ZipArchive")) {
    echo '<h1>Error: Required modules missing</h1>';
    echo 'Automatically installing updates requires the <a href="https://www.php.net/manual/en/zip.installation.php" target="_blank">ZipArchive</a> class provided by the php-zip extension.<br>';
    echo 'Please install this extension, reload your webserver, and then refresh this page to complete the update process.<br><br>';
    echo "Ubuntu users with Apache can run the following commands: <b>sudo apt install -y php-zip && sudo systemctl reload apache2</b>";
    die();
}

// Turn off gzip compression for this response so we can send partial response back (ob_flush())
if (function_exists('apache_setenv')) {
    apache_setenv('no-gzip', 1);
}

ini_set('zlib.output_compression', 0);
// Turn on output buffering if necessary
if (ob_get_level() == 0) {
    ob_start();
}

echo '<html><title>userTrack - Updater</title><body>';

function out($string)
{
    echo $string;
    ob_flush();
    flush();
}

function outLine($string)
{
    out($string . '<br/>');
}

outLine('Please keep this page open until updater is finished.');
outLine('Starting updater...');

$query = "SELECT value FROM `ust_meta` WHERE `key`='LICENSE'";
$stmt = $db->prepare($query);
$stmt->execute();
$license = $stmt->fetch(PDO::FETCH_COLUMN);

require_once '../isWordpress.php';
$wp = isWordpress();

$DOWNLOAD_URL = 'https://license-api.usertrack.net/download?license=' . $license;
$HASH_REMOTE_URL = 'https://license-api.usertrack.net/download?license=' . $license . '&hash';
$HASH_CHECK_URL = 'https://raw.githubusercontent.com/userTrack/update-integrity-check/master/latest-version-hash';

if ($wp) {
    $DOWNLOAD_URL .= '&variant=wp';
    $HASH_REMOTE_URL .= '&variant=wp';
    $HASH_CHECK_URL .= '-wp';
}

// Ability to test beta releases
if (isset($_GET['beta'])) {
    $DOWNLOAD_URL .= '&beta';
    $HASH_REMOTE_URL .= '&beta';
    $HASH_CHECK_URL .= '-beta';
}

// Cache breaker for github hash
$HASH_CHECK_URL .= '?r=' . rand(0, 32768);

outLine('Checking remote file integrity...');
$hashCheck = trim(file_get_contents($HASH_CHECK_URL));
$hashRemote = trim(file_get_contents($HASH_REMOTE_URL));

if ($hashCheck != $hashRemote) {
    outLine('Expected hash: ' . htmlspecialchars($hashCheck));
    outLine('Remote hash: ' . htmlspecialchars($hashRemote));
    die('File integrity check failed. Update process stopped.');
} else {
    outLine('File hash ok.');
}

$file = "userTrack.zip";

// Make sure old temp files are removed
outLine('Clearing old update files...');
delete_files('userTrack');

outLine('----');
outLine('Downloading userTrack.zip...');

file_put_contents($file, fopen($DOWNLOAD_URL, 'r'));

outLine('Checking downloaded file integrity...');
$hashLocal = hash_file('sha256', $file);

if ($hashCheck != $hashLocal) {
    unlink($file);
    outLine('Expected hash: ' . htmlspecialchars($hashCheck));
    outLine('Local hash: ' . htmlspecialchars($hashLocal));
    die('Local file integrity check failed. Update process stopped.');
} else {
    outLine('Local file hash ok.');
}

outLine('Unzipping...');
$path = pathinfo(realpath($file), PATHINFO_DIRNAME);
$zip = new ZipArchive;
$res = $zip->open($file);

if ($res !== true) {
    die('Could not open downloaded archive.');
}

$zip->extractTo($path);
$zip->close();
unlink($file); // Delete archive after unzipping

outLine('Unzipped.');
outLine('----');
outLine('Copying files...');
$ustRootPath = $path . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..';
if ($wp) {
    // For WordPress we extract one level higher (in wp-usertrack)
    $ustRootPath .= DIRECTORY_SEPARATOR . '..';
}
$innerFolderName = $wp ? 'wp-usertrack' : 'userTrack';
copyDirContentsOnly($innerFolderName, $ustRootPath);

outLine('Copying complete.');
outLine('Removing temp files...');
delete_files('userTrack');
outLine('Temp files removed.');

if (!$wp) {
    outLine('Copying previous database connection info...');
    require_once '../../setup/setDbCredentials.php';
    setDbCredentials($host, $db_name, $username, $password);
}

outLine('Finalizing update...');
sleep(1);
echo '<script>window.location = "../../install.php?update"</script>';
