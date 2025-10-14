const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

for (const line of input) {
  const sides = line.split(" ").map(Number);
  const [a, b, c] = sides.sort((x, y) => x - y);

  // 종료 조건
  if (a === 0 && b === 0 && c === 0) break;

  if (a + b <= c) {
    console.log("Invalid");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
