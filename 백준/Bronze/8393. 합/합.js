const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const n = Number(input);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
