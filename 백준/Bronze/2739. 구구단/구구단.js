const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const N = Number(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
