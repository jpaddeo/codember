import fs from 'fs-extra';

const colors = fs.readFileSync('../colors.txt');
const colorsArr = eval(colors.toString());

console.log(`submit `);
