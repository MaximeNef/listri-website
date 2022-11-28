<?php
// Credit: https://www.texelate.co.uk/blog/generate-a-secure-token-with-php
function generateSecureToken($length, $lengthType) {

    // Work out byte length
    switch ($lengthType) {
    case 'bits':
        $byteLength = ceil($length / 8);
        break;

    case 'bytes':
        $byteLength = $length;
        break;

    case 'chars':
        $byteLength = $length / 2; // In hex one char = 4 bits, i.e. 2 chars per byte
        break;

    default:
        return false;
        break;
    }

    // Try getting a cryptographically secure token
    $token = openssl_random_pseudo_bytes($byteLength);

    if ($token !== false) {
        return bin2hex($token);
    } else {
        // openssl_random_pseudo_bytes failed
        return false;

    }
}
?>