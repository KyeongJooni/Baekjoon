const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const X = Number(input[0]); // 총 금액
const N = Number(input[1]); // 물건 종류 수

const sum = input
  .slice(2, 2 + N)
  .reduce((acc, line) => {
    const [a, b] = line.split(" ").map(Number);
    return acc + a * b;
  }, 0);

console.log(sum === X ? "Yes" : "No");
