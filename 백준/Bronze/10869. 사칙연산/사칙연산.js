const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);