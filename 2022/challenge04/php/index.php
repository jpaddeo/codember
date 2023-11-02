<?php

// helper
function array_every(array $arr, callable $predicate) {
    foreach ($arr as $idx => $e) {
        if (!call_user_func($predicate, $e, $idx)) {
            return false;
        }
    }
    return true;
}

function isValidPassword ($number) {
    $numberStr = strval($number);
    $numberArr = str_split($numberStr);
    $validPassword = count($numberArr) === 5;
    $validPassword = $validPassword && strstr($numberStr, "55");
    $validPassword = $validPassword && array_every($numberArr, function ($number, $index) use ($numberArr) {
        return $index == 0 || $number >= $numberArr[$index - 1];
    });
    return $validPassword;    
}

$validPasswords = [];
for($i = 11098; $i <= 98123; $i++) {
    if(isValidPassword($i)) {
        $validPasswords[] = $i;
    }
}

echo "submit " . count($validPasswords) . "-" . $validPasswords[55];