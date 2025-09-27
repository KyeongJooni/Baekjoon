import * as fs from "fs";

const input: string[] = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const numbers: string = input[1].trim();

const sum: number = numbers.split("").reduce((acc, cur) => acc + Number(cur), 0);

console.log(sum);
