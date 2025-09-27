const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const T = Number(input[0]);
let result = [];

for (let t = 1; t <= T; t++) {
  const [R, S] = input[t].split(" ");
  const repeat = Number(R);

  let newStr = "";
  for (let ch of S) {
    newStr += ch.repeat(repeat);
  }

  result.push(newStr);
}

console.log(result.join("\n"));
