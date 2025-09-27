const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().toUpperCase();

const counts = {};

for (const ch of input) {
  counts[ch] = (counts[ch] || 0) + 1;
}

let maxCount = 0;
let maxChar = "";
let isDuplicate = false;

for (const ch in counts) {
  const count = counts[ch];
  if (count > maxCount) {
    maxCount = count;
    maxChar = ch;
    isDuplicate = false;
  } else if (count === maxCount) {
    isDuplicate = true;
  }
}

console.log(isDuplicate ? "?" : maxChar);
