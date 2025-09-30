const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf8").trim());

const side = Math.pow(2, N) + 1;
console.log(side * side);
