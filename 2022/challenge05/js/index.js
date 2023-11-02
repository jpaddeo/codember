import fs from 'fs-extra';

const mecenasOrig = fs.readJSONSync('../mecenas.json');

function mecenasKiller(mecenas, mecenaEnMorir = 0) {
  if (mecenas.length == 1) {
    console.log(`submit ${mecenas[0]}-${mecenasOrig.lastIndexOf(mecenas[0])}`);
    return;
  }
  mecenaEnMorir = (mecenaEnMorir + 1) % mecenas.length;
  if (mecenaEnMorir > -1) {
    mecenas.splice(mecenaEnMorir, 1);
  }
  mecenasKiller(mecenas, mecenaEnMorir);
}

console.time("challenge05");
mecenasKiller([...mecenasOrig]);
console.timeEnd("challenge05");