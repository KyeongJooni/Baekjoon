import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line: string) => {
  input.push(line.trim());
}).on("close", () => {
  const [N, M] = input[0].split(" ").map(Number);
  const baskets: number[] = Array.from({ length: N }, (_, i) => i + 1);

  for (let t = 1; t <= M; t++) {
    let [i, j] = input[t].split(" ").map(Number);
    const reversed = baskets.slice(i - 1, j).reverse();
    baskets.splice(i - 1, j - i + 1, ...reversed);
  }

  console.log(baskets.join(" "));
});
