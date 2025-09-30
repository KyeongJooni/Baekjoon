const fs = require("fs");
let [N, B] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

console.log(N.toString(B).toUpperCase());
