const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(line => line.split(" ").map(Number));

const N = input[0][0];
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let k = 1; k <= N; k++) {
  const [x, y] = input[k];
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      paper[i][j] = 1;
    }
  }
}

let area = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j] === 1) area++;
  }
}

console.log(area)