const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numbers = input[1].split(' ').map(Number);

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const count = numbers.filter(isPrime).length;
console.log(count);
