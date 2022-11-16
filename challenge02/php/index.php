<?php

$encryptedMessage = file_get_contents('../encrypted.txt');

$encryptedMessageWords = explode(" ", $encryptedMessage);
$words = '';
foreach($encryptedMessageWords as $encryptedWord) {
    $word = '';
    $num = 0;
    $encryptedCharacters = str_split($encryptedWord);
    foreach($encryptedCharacters as $character) {
        $num = $num * 10 + $character;
        if($num >= 32 && $num <= 122) {
            $word = $word . chr($num);
            $num = 0;
        }
    }
    $words = $words . " " . $word;
}
echo "submit " . trim($words);
