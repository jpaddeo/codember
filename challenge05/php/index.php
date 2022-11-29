<?php

// TODO: file_get_contents and parse from file

$mecenasOrig = ["Gorusuke",
"DavidFabian",
"ItziarZG",
"edy WOLF",
"MarcosGaPe",
"Jose Jimenez",
"Borja ",
"Jhonathan Izquierdo Higuita",
"MiLfeR322",
"Sebastián Espínola",
"Matias Luna",
"Imanol Decima",
"MarcoCasula",
"MaríaBohórquez",
"Renan",
"IvanL'olivier",
"Shonero",
"Luichidev",
"Faviola Narvaez",
"Christopher Fuentes",
"Kuro",
"Juan Pablo Addeo",
"Sergio Martínez",
"Fran Enriquez González",
"Diana",
"tictools",
"ConchaAsensio",
"Emilio_Arreaza",
"novamix",
"Tomas Duclos",
"Elaya",
"Ignacio Palominos",
"David C.",
"Gerardo Felipe Conrado",
"ElXuri",
"David Borja Martinez",
"JaviFelices",
"CarlesSànchez",
"Gorusuke",
"DavidFabian",
"ItziarZG",
"edy WOLF",
"MarcosGaPe",
"Jose Jimenez",
"Borja ",
"Jhonathan Izquierdo Higuita",
"MiLfeR322",
"Sebastián Espínola",
"Matias Luna",
"Imanol Decima",
"MarcoCasula",
"MaríaBohórquez",
"Renan",
"IvanL'olivier",
"Shonero",
"Luichidev",
"Faviola Narvaez",
"Christopher Fuentes",
"Kuro",
"Juan Pablo Addeo",
"Sergio Martínez",
"Fran Enriquez González",
"Diana",
"tictools",
"ConchaAsensio",
"Emilio_Arreaza",
"novamix",
"Tomas Duclos",
"Elaya",
"Ignacio Palominos",
"David C.",
"Gerardo Felipe Conrado",
"ElXuri",
"David Borja Martinez",
"JaviFelices",
"CarlesSànchez",
"Gorusuke",
"DavidFabian",
"ItziarZG",
"edy WOLF",
"MarcosGaPe",
"Jose Jimenez",
"Borja ",
"Jhonathan Izquierdo Higuita",
"MiLfeR322",
"Sebastián Espínola",
"Matias Luna",
"Imanol Decima",
"MarcoCasula",
"MaríaBohórquez",
"Renan",
"IvanL'olivier",
"Shonero",
"Luichidev",
"Faviola Narvaez",
"Christopher Fuentes",
"Kuro",
"Juan Pablo Addeo",
"Sergio Martínez",
"Fran Enriquez González",
"Diana",
"tictools",
"ConchaAsensio",
"Emilio_Arreaza",
"novamix",
"Tomas Duclos",
"Elaya",
"Ignacio Palominos",
"David C.",
"Gerardo Felipe Conrado",
"ElXuri",
"David Borja Martinez",
"JaviFelices",
"CarlesSànchez"
];

function lastIndexOf($haystack, $needle, $offset = 0) {
    $haystackStr = implode('', $haystack);
    $size = strlen($haystackStr);
    $pos = strpos(strrev($haystackStr), $needle, $size - $offset);
   
    if ($pos === false)
        return false;   
    return $size - $pos;
}

function mecenasKiller ($mecenas, $mecenaEnMorir = 0) {
    if (count($mecenas) == 1) {
        return $mecenas[0];
    }
    $mecenaEnMorir = ($mecenaEnMorir + 1) % count($mecenas);
    if ($mecenaEnMorir > -1) {
        $mecenas = array_splice($mecenas, 1);
    }
    mecenasKiller($mecenas, $mecenaEnMorir);
}

$ulitmoMecenaVivo = mecenasKiller($mecenasOrig);
echo "submit " . $ulitmoMecenaVivo . "-" . lastIndexOf($mecenasOrig, $ulitmoMecenaVivo);