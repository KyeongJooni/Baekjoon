const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
//input은 배열이다.
const [N, M, V] = input[0].split(" ").map(Number); //그래프를 저장할 배열을 만드는 것

//그래프 인접 리스트 생성
const graph = Array.from({ length: N + 1 }, () => []);

input.slice(1).forEach((line) => {
  const [a, b] = line.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

graph.forEach((list) => list.sort((a, b) => a - b)); //정렬
const visited = Array(N + 1).fill(false); //초기값은 false로 아직 한번도 방문하지 않았다.
//무한 루프 방지, 중복 방문 방지를 하기 위해서
//얘가 없으면 무한 루프
//정렬을 하고 그래프를 만들어서 해야함 안그러면 오답 가능성이 있다.
const dfsResult = [];
const dfs = (v) => {
  visited[v] = true;
  dfsResult.push(v);
  for (const next of graph[v]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};

dfs(V);
visited.fill(false);
//BFS 구현

const bfs = (start) => {
  const queue = [start];
  const bfsResult = [];
  visited[start] = true;

  while (queue.length > 0) {
    const v = queue.shift();
    bfsResult.push(v);

    for (const next of graph[v]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  return bfsResult;
};
const bfsResult = bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
