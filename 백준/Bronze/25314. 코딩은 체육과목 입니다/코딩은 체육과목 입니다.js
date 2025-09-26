const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

const N = Number(input);
const count = N / 4;

console.log("long ".repeat(count) + "int");
