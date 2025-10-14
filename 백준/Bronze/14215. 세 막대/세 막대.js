const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

input.sort((a, b) => a - b);
const [a, b, c] = input;

if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log((a + b) * 2 - 1);
}
