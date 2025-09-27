const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const S = input[0].trim();
const i = Number(input[1]);

console.log(S[i - 1]);
