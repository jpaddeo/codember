import fs from 'fs-extra';

console.time("challenge01");
const usersStr = fs.readFileSync('../users.txt');
const usersArr = usersStr.toString().split('\n');

const REQUIRED_KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

let correctUsers = 0;
let lastCorrectUser = '';
let userObj = {};
usersArr.forEach((user) => {
  if (user.length) {
    user.split(' ').forEach((propValue) => {
      const propValueArr = propValue.split(':');
      userObj[propValueArr[0]] = propValueArr[1];
    });
  } else {
    if (REQUIRED_KEYS.every((key) => Object.keys(userObj).includes(key))) {
      correctUsers++;
      lastCorrectUser = userObj['usr'];
    }
    userObj = {};
  }
});

console.log(`submit ${correctUsers}${lastCorrectUser}`);
console.timeEnd("challenge01");
