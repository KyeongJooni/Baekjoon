const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);
const [A, B] = input;

console.log(A * B);
