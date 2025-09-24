const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const A = parseInt(input[0]); // 첫 번째 세 자리 수
const B = input[1];          // 두 번째 세 자리 수 (문자열 그대로)

const b1 = parseInt(B[2]);   // 일의 자리
const b2 = parseInt(B[1]);   // 십의 자리
const b3 = parseInt(B[0]);   // 백의 자리

console.log(A * b1);
console.log(A * b2);
console.log(A * b3);
console.log(A * parseInt(B));