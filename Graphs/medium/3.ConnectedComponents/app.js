function edgeListToAdjList(n, edgeList) {
  const adj = Array.from({ length: n }, () => []);

  for (let [u, v] of edgeList) {
    adj[u].push(v);
    adj[v].push(u);
  }
  return adj;
}

function dfs(v, adj, visited) {
  visited[v] = true;

  for (let u of adj[v]) {
    if (!visited[u]) {
      dfs(u, adj, visited);
    }
  }
}

function connectedComponents(V, edgeList) {
  let adj = edgeListToAdjList(V, edgeList);
  let count = 0;
  let visited = new Array(adj.length).fill(false);
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, adj, visited);
      count++;
    }
  }
  return count;
}

console.log(
  connectedComponents(4, [
    [0, 1],
    [1, 2],
  ]),
);
console.log(
  connectedComponents(7, [
    [0, 1],
    [1, 2],
    [2, 3],
    [4, 5],
  ]),
);
