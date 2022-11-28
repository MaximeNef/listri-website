<?php
$userExists = false;

try {
    $query = 'SELECT COUNT(*) from ust_users';
    $stmt = $db->prepare($query);
    $stmt->execute();
    $userExists = $stmt->fetch(PDO::FETCH_COLUMN) > 0;
} catch (Exception $e) {}

$isUpdate = isset($_GET['update']) || $userExists;
?>
<div class="step wrap">
    <img src="images/usertrack.png" alt="userTrack" class="logo"/>

    <?php if (!$isUpdate): ?>
        <h1>Step 2: Almost done!</h1>
        <h2>An <b>admin</b> account will be created.</h2>
        <span class="info">You can login on the next page using the username <b>admin</b></span>
    <?php else: ?>
        <h1>Complete the update process!</h1>
    <?php endif;?>

    <form action="setup/setup.php" method="POST">
        <?php if (!$isUpdate): ?>
            <h3>Choose a new password</h3>
            <input type="password" name="pass" required minlength="6" autofocus />
        <?php else: ?>
            <input type="hidden" name="pass" value="^UPDATE^" />
            Click finish to update the database
        <?php endif;?>
        <input type="submit" value="Finish setup">
    </form>
</div>
