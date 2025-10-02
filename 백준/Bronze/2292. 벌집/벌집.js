const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const N = Number(input);

if (N === 1) {
  console.log(1);
} else {
  let range = 1;
  let layer = 1;
  
  while (range < N) {
    range += 6 * layer;
    layer++;
  }
  
  console.log(layer);
}