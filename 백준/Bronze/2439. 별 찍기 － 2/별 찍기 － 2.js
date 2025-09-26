const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const N = Number(input);
const lines = [];

for (let i = 1; i <= N; i++) {
  lines.push(" ".repeat(N - i) + "*".repeat(i));
}

console.log(lines.join("\n"));
