<?php

include 'dbconfig.php';

$outputOnly = @$_GET['outputOnly'] || false;

// Make sure the db connection was successful
if (isset($db_error)) {

    // Unset cookies
    setcookie("userTrackPassword", '', time() - 3600, "/");
    setcookie("userTrackUsername", '', time() - 3600, "/");
    setcookie("userTrackUserid", '', time() - 3600, "/");
    setcookie("userTrackUserLevel", '', time() - 3600, "/");

    if ($outputOnly) {
        die('0');
    }

    // Redirect
    if(headers_sent()) {
        echo '<script>window.location = "install.php"</script>';
    } else {
        header("Location: install.php");
    }
    die();
}

if (isset($_POST['pw']) && isset($_POST['user'])) {
    // Get password & username from input
    $user = $_POST['user'];

    // If we login via the form, get salt from db
    $stmt = $db->prepare("SELECT salt FROM ust_users WHERE name = :name");
    $stmt->bindValue(':name', $user, PDO::PARAM_STR);
    $stmt->execute();
    $salt = $stmt->fetchColumn();

    $pass = hash('sha256', $salt . $_POST['pw']);
} else {
    // Get password & username from cookie
    $pass = @$_COOKIE["userTrackPassword"];
    $user = @$_COOKIE["userTrackUsername"];
    $loginFromCookie = isset($pass) && isset($user);
}

$loggedIn = false;

// Check login
try {
    $stmt = $db->prepare("SELECT * FROM ust_users WHERE name = :name AND password = :password");
    $stmt->bindValue(':name', $user, PDO::PARAM_STR);
    $stmt->bindValue(':password', $pass, PDO::PARAM_STR);
    $stmt->execute();
} catch (PDOException $e) {
    if ($outputOnly) {
        die('0');
    }

    // Redirect
    header("Location: install.php");
    die();
}

$rows = $stmt->fetchAll();
$loggedIn = count($rows);

// If login is incorrect
if ($loggedIn != 1) {
    if ($outputOnly) {
        die('0');
    }
    
    // If no users in the database, go to setup
    try {
        $stmt = $db->prepare("SELECT COUNT(*) FROM ust_users");
        $stmt->execute();
        $res = $stmt->fetchColumn();
        if(!$res) {
            header("Location: install.php");
            die();
        }
    } catch (PDOException $e) {
        // Redirect
        header("Location: install.php");
        die();
    }

    // If in cookie is stored a wrong username
    if (isset($_COOKIE["userTrackUsername"])) {
        setcookie("userTrackUsername", '', time() - 3600, "/");
        header("location:login.php");
    }
    ?>
    <!doctype html>
    <html>
    <head>
        <link rel="stylesheet" href="css/login.css" />
    </head>
    <body>
        <div class="wrap">
            <?php
                echo '<img 
                    class="logo"
                    src="images/usertrack.png" 
                    alt="userTrack"' 
                . '/>';
            ?>
            
            <form action="login.php?retry" method="post">
                <div class='label'>Username</div><input type="text" placeholder="eg. admin" name="user" autofocus/>
                <div class='label'>Password</div><input type="password" name="pw"/>
                <?php if (isset($_GET['retry']))echo '<h3 class="warning">Incorrect username or password.</h3>';?>
                <input type="submit" value="Login" />
            </form>
            <br />
            <?php if (isset($_GET['retry'])) echo 'If you forgot the password, it can only be reset directly in the database.'; ?>
        </div>
    </body>
    </html>

<?php
die();
}

if ($outputOnly) {
    die('1');
}

// Ok, log in
$row = $rows[0];
$userId = $row['id'];
$level = $row['level'];

// We are already logged in, don't set cookies again
if ($loginFromCookie && $loggedIn) {
    // CSRF check
    if (!isset($skipCSRFCheck)) {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
        if (!isset($_SESSION['UST_CSRF_TOKEN_' . @$_SERVER['HTTP_X_CSRF_TOKEN']])) {
            http_response_code(403);
            die('Request failed: invalid CSRF token.');
        }
    }

    return;
}

// Set login cookies
setcookie("userTrackPassword", $pass, time() + 2592000, "/", "", false, true);
setcookie("userTrackUsername", $user, time() + 2592000, "/");
setcookie("userTrackUserid", $userId, time() + 2592000, "/");
setcookie("userTrackUserLevel", $level, time() + 2592000, "/");

if (!isset($_COOKIE["userTrackUsername"])) {
    sleep(2);
    header("location:../");
}

?>