const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number(input[0]);

let minX = Infinity, maxX = -Infinity;
let minY = Infinity, maxY = -Infinity;

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
}

console.log((maxX - minX) * (maxY - minY));
