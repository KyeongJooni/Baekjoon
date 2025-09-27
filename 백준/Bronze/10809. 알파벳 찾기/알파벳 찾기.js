const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

let result = [];

for (let i = 97; i <= 122; i++) { // ASCII 코드 a=97 ~ z=122
  const char = String.fromCharCode(i);
  result.push(input.indexOf(char));
}

console.log(result.join(" "));
