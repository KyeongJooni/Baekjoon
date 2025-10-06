const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
const [N, K] = input;

const divisors = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) divisors.push(i);
}

console.log(divisors[K - 1] || 0);
