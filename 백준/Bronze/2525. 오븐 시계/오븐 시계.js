const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let [H, M] = input[0].split(" ").map(Number);
const T = Number(input[1]);

// 총 분으로 변환
let totalMinutes = H * 60 + M + T;

// 하루(24시간) = 1440분, 이를 초과하면 나머지로 맞춤
totalMinutes %= 1440;

H = Math.floor(totalMinutes / 60);
M = totalMinutes % 60;

console.log(H + " " + M);