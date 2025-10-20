const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
const C = BigInt(input[2]);

console.log((A + B + C).toString());
