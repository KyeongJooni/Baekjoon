const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const gradeMap = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
};

let totalScore = 0;
let totalCredit = 0;

for (const line of input) {
  const [subject, creditStr, grade] = line.split(" ");
  const credit = Number(creditStr);

  if (grade === "P") continue;

  totalScore += credit * gradeMap[grade];
  totalCredit += credit;
}

console.log((totalScore / totalCredit).toFixed(6));
