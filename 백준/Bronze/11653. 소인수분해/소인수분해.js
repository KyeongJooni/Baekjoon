const fs = require('fs');
let N = Number(fs.readFileSync(0, 'utf8').trim());

for (let i = 2; i * i <= N; i++) {
  while (N % i === 0) {
    console.log(i);
    N = N / i;
  }
}

if (N > 1) console.log(N);
