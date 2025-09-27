const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const reversed = input.split("").reverse().join("");
console.log(input === reversed ? 1 : 0);
