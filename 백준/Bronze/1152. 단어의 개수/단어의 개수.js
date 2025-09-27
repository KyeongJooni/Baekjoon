const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim();

// 공백 기준으로 나누되, 입력이 공백만 있을 경우 예외 처리
if (input === "") {
  console.log(0);
} else {
  console.log(input.split(" ").length);
}
