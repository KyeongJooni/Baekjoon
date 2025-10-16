const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());
console.log((n * n).toString());
console.log(2);
