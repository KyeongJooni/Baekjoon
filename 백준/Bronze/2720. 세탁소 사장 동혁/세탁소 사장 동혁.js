const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);
const coins = [25, 10, 5, 1];

for (let i = 1; i <= T; i++) {
  let C = Number(input[i]);
  let result = [];

  for (let coin of coins) {
    result.push(Math.floor(C / coin));
    C %= coin;
  }

  console.log(result.join(" "));
}
