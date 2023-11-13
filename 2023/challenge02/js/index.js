const COMPILATOR = {
  '#': (IP) => IP.counter++,
  '@': (IP) => IP.counter--,
  '*': (IP) => (IP.counter = IP.counter * IP.counter),
  '&': (IP, callback) => callback(IP.counter),
};

const MESSAGE =
  '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

const IP = {
  counter: 0,
};
const SUBMIT_MESSAGE = [];
MESSAGE.split('').forEach((ch) => COMPILATOR[ch](IP, (value) => SUBMIT_MESSAGE.push(value)));

console.log(`submit ${SUBMIT_MESSAGE.join('')}`);
