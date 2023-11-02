<?php

function array_every(array $arr, callable $predicate) {
    foreach ($arr as $e) {
        if (!call_user_func($predicate, $e)) {
             return false;
        }
    }
    return true;
}

$users = file('../users.txt');
$REQUIRED_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

$correctUsers = 0;
$lastCorrectUser = "";
$userObj = [];
foreach($users as $user) {
    if(!empty(trim($user))) {
        $propsValues = explode(' ', $user);
        foreach($propsValues as $propValue) {
            $propValueArr = explode(':', $propValue);
            $userObj[$propValueArr[0]] = $propValueArr[1];
        }
    } else {
        if(array_every($REQUIRED_FIELDS, function ($elem) use($userObj) {return in_array($elem, array_keys($userObj)); })) {
            $correctUsers++;
            $lastCorrectUser = $userObj['usr'];
        }
        $userObj=[];
    }
}
echo "submit " . $correctUsers . $lastCorrectUser;
