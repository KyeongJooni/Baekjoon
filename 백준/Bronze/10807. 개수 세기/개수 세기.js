const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);
const v = Number(input[2]);

console.log(numbers.filter(num => num === v).length);
