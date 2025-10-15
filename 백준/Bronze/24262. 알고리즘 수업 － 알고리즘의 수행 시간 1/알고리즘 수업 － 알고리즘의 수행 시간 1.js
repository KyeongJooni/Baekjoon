const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(1); // 항상 1번 실행
console.log(0); // O(1)
