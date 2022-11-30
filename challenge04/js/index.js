const FROM = 11098;
const TO = 98123;

const isValidPassword = (number) => {
  const numberStr = number.toString();
  const numberArr = numberStr.split('');

  let validPassword = numberArr.length === 5;
  validPassword = validPassword && numberStr.includes('55');
  validPassword =
    validPassword &&
    numberArr.every((number, index) => {
      return index === 0 || number >= numberArr[index - 1];
    });
  return validPassword;
};

console.time("challenge04");
const validPasswords = [];
for (let i = FROM; i <= TO; i++) {
  if (isValidPassword(i)) {
    validPasswords.push(i);
  }
}
console.log(`submit ${validPasswords.length}-${validPasswords[55]}`);
console.timeEnd("challenge04");
