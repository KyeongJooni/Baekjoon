const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

//그래프 인접 리스트 생성
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(N + 1).fill(false);
const order = Array(N + 1).fill(0);
let count = 1;
graph.forEach((list) => list.sort((a, b) => a - b)); //정렬

const dfsResult = [];

const dfs = (v) => {
  visited[v] = true;
  order[v] = count++;
  dfsResult.push(v);
  for (const next of graph[v]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};

dfs(V);
for (let i = 1; i <= N; i++) {
  console.log(order[i]);
}
