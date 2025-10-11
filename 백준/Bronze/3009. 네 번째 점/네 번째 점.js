const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.split(' ').map(Number));

const xs = input.map(v => v[0]);
const ys = input.map(v => v[1]);

// 각 좌표에서 한 번만 등장하는 값 찾기
const x = xs[0] === xs[1] ? xs[2] : xs[0] === xs[2] ? xs[1] : xs[0];
const y = ys[0] === ys[1] ? ys[2] : ys[0] === ys[2] ? ys[1] : ys[0];

console.log(x, y);
