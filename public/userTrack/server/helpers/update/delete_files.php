<?php
/*
 * php delete function that deals with directories recursively
 * CREDIT: https://paulund.co.uk/php-delete-directory-and-files-in-directory
 */
function delete_files($target) {
    if (is_dir($target)) {
        $files = glob($target . '/{,.}*[!.]', GLOB_MARK | GLOB_BRACE); //GLOB_MARK adds a slash to directories returned
        foreach ($files as $file) {
            delete_files($file);
        }
        rmdir($target);
    } elseif (is_file($target)) {
        unlink($target);
    }
}