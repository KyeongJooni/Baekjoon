const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const seen = new Set();
  let isGroup = true;

  for (let j = 0; j < word.length; j++) {
    const ch = word[j];
    if (j > 0 && word[j] !== word[j - 1] && seen.has(ch)) {
      isGroup = false;
      break;
    }
    seen.add(ch);
  }

  if (isGroup) count++;
}

console.log(count);
