function dfs(node, adj, visited) {
  visited[node] = true;

  for (let u = 0; u < adj.length; u++) {
    if (adj[node][u] === 1 && !visited[u]) {
      dfs(u, adj, visited);
    }
  }
}

function numberOfProvinces(adj) {
  let visited = new Array(adj.length).fill(false);
  let count = 0;
  for (let i = 0; i < adj.length; i++) {
    if (!visited[i]) {
      dfs(i, adj, visited);
      count++;
    }
  }
  return count;
}

console.log(
  numberOfProvinces([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1],
  ]),
);

console.log(
  numberOfProvinces([
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ]),
);
