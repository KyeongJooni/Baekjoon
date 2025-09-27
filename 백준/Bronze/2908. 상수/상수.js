const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split(" ");

const [A, B] = input.map(num =>
  Number(num.split("").reverse().join(""))
);

console.log(Math.max(A, B));
