const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let t = 1; t <= M; t++) {
  const [i, j] = input[t].split(" ").map(Number);
  [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]]; // swap
}
//배열 인덱스는 0부터 시작
console.log(baskets.join(" "));
