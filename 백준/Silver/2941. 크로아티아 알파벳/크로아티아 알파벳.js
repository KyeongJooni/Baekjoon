const fs = require("fs");
let s = fs.readFileSync(0, "utf8").toString().trim();

// 'dz='를 먼저, 그 다음 나머지 패턴
s = s.replace(/dz=|c=|c-|d-|lj|nj|s=|z=/g, "X");

console.log(s.length);
