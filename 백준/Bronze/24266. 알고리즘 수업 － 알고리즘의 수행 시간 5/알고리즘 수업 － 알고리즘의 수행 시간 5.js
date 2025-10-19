const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf-8').trim());

const result = n * n * n;

console.log(result.toString());
console.log(3);
