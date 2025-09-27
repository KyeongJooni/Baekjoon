const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input.slice(1, N + 1).map(line => line.split(" ").map(Number));
const B = input.slice(N + 1).map(line => line.split(" ").map(Number));

let result = "";
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  result += row.join(" ") + "\n";
}

console.log(result.trim());
