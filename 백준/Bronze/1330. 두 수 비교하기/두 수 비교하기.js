const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const A = input[0];
const B = input[1];

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
