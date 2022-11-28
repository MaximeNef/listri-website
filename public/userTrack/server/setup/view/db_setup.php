<div class="step wrap">
    <img src="images/usertrack.png" alt="userTrack" class="logo"/>

    <h1>Step 1: The database</h1>
    <h2>You first have to create a database.</h2>

    <span class="info">To <a href="https://www.youtube.com/watch?v=X_d0JUPgFaA" target="_blank">create a new database</a>
     you can use your <b>server cPanel</b> or phpMyAdmin interface.</span>

    <h4>After you have created a database enter the connection details below:</h4>
    
    <form action="install.php" method="POST">
        <div>
            <label for="db_host">Database host:</label>
            <input type="text" name="db_host" title="You can also include port here. Leave it as default if not sure" value="<?php echo $host; ?>"/>
        </div>
        
        <div>
            <label for="db_name">Database name:</label>
            <input type="text" name="db_name" value="<?php echo htmlentities($db_name, ENT_QUOTES | ENT_HTML5, 'UTF-8'); ?>"/>
        </div>

        <div>
            <label for="db_user">Database username:</label>
            <input type="text" name="db_user" value="<?php echo htmlentities($username, ENT_QUOTES | ENT_HTML5, 'UTF-8'); ?>"/>
        </div>

        <div>
            <label for="db_pass">Database password:</label>
            <input type="text" name="db_pass" value=""/>
        </div>

        <input type="submit" value="Test and go to next step">
    </form>

    <br />
    <span class="error">
        The current connection error is: <span><?php echo htmlentities($error_message, ENT_QUOTES | ENT_HTML5, 'UTF-8'); ?></span>
        Ignore this error if you have not yet correctly completed the above form.
    </span>
</div>
