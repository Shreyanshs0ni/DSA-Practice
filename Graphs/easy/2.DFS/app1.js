function dfs(v, adj, visited, res) {
  visited[v] = true;
  res.push(v);

  for (let u of adj[v]) {
    if (!visited[u]) {
      dfs(u, adj, visited, res);
    }
  }
}

function main() {
  let adj = [[1, 2], [0, 3], [0, 4], [1], [2]];
  let visited = new Array(adj.length).fill(false);
  let res = [];
  dfs(0, adj, visited, res);
  console.log(res);
}
main();
