const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);
const [M, N] = input;

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const primes = [];
for (let i = M; i <= N; i++) {
  if (isPrime(i)) primes.push(i);
}

if (primes.length === 0) {
  console.log(-1);
} else {
  const sum = primes.reduce((a, b) => a + b, 0);
  console.log(sum);
  console.log(primes[0]);
}
