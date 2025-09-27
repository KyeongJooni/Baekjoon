const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const baskets = new Array(N).fill(0);

for (let t = 1; t <= M; t++) {
  const [i, j, k] = input[t].split(" ").map(Number);
  for (let idx = i - 1; idx <= j - 1; idx++) {
    baskets[idx] = k;
  }
}

console.log(baskets.join(" "));
