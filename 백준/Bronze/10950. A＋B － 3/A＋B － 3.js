const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
}
