const fs = require("fs");
const [N, B] = fs.readFileSync(0, "utf8").trim().split(" ");

console.log(parseInt(N, Number(B)));
