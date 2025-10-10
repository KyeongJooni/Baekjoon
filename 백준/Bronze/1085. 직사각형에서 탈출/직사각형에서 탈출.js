const fs = require('fs');
const [x, y, w, h] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const minDistance = Math.min(x, y, w - x, h - y);
console.log(minDistance);
