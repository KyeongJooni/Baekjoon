const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const T = Number(input[0]);
let result = [];

for (let i = 1; i <= T; i++) {
  const str = input[i].trim();
  result.push(str[0] + str[str.length - 1]);
}

console.log(result.join("\n"));
