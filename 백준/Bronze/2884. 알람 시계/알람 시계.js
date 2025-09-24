const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let H = input[0];
let M = input[1];

if (M < 45) {
  H -= 1;
  M += 60;
}
M -= 45;

if (H < 0) {
  H = 23;
}

console.log(H + " " + M);
