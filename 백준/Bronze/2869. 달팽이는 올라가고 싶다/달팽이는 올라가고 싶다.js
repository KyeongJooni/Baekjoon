const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ").map(Number);

const [A, B, V] = input;

const days = Math.ceil((V - B) / (A - B));
console.log(days);
