const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

console.log(n); // 반복문이 n번 실행됨
console.log(1); // O(n)
