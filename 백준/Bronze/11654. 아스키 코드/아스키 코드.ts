import * as fs from "fs";

const input: string = fs.readFileSync(0, "utf8").toString().trim();

console.log(input.charCodeAt(0));
