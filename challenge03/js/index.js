import fs from 'fs-extra';

const colors = fs.readFileSync('../colors.txt');
const colorsArr = eval(colors.toString());

function getZebrasCount(colors) {
  let maxZebraCount = 0;
  let maxZebraColor = '';

  let lastColor = '';
  let nextColor = colors[0];
  let currentZebraCount = 1;

  colors.forEach((currentColor) => {
    if (currentColor !== nextColor || lastColor === currentColor) {
      currentZebraCount = 1; // reseto el contador
    }
    currentZebraCount++;
    nextColor = lastColor;
    lastColor = currentColor;
    if (currentZebraCount > maxZebraCount) {
      maxZebraCount = currentZebraCount;
      maxZebraColor = lastColor;
    }
  });

  return {
    maxZebraColor,
    maxZebraCount,
  };
}

/*
console.log(getZebrasCount(['red', 'blue', 'red', 'blue', 'green'])); // -> 4, blue
console.log(getZebrasCount(['green', 'red', 'blue', 'gray'])); // -> 2, gray
console.log(getZebrasCount(['blue', 'blue', 'blue', 'blue'])); // -> 1, blue
console.log(getZebrasCount(['red', 'green', 'red', 'green', 'red', 'green'])); // -> 6, green
console.log(getZebrasCount(['blue', 'red', 'blue', 'red', 'gray'])); // -> 4, red
console.log(
  getZebrasCount(['red', 'red', 'blue', 'red', 'red', 'red', 'green'])
); // -> 3, red
console.log(
  getZebrasCount([
    'red',
    'blue',
    'red',
    'green',
    'red',
    'green',
    'red',
    'green',
  ])
); // -> 6, green
*/

const solution = getZebrasCount(colorsArr);
console.log(`submit ${solution.maxZebraCount}@${solution.maxZebraColor}`);
