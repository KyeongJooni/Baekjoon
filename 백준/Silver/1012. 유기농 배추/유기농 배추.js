const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++].split(" ").map(Number); // M: 가로길이, N: 세로길이, K: 배추가 심어진 위치의 개수
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 1; i <= K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    field[y][x] = 1;
  }
  const dfs = (y, x) => {
    visited[y][x] = true;

    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
        if (field[ny][nx] === 1 && !visited[ny][nx]) {
          dfs(ny, nx);
        }
      }
    }
  };
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }
  console.log(count);
}
