const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n").map(Number);

const max = Math.max(...input);
const index = input.indexOf(max) + 1; // 1부터 시작하므로 +1

console.log(max);
console.log(index);
