function bfsOnGraph(adj) {
  let visited = new Array(adj.length).fill(false);
  visited[0] = true;

  let q = [0];
  let front = 0;

  let res = [];

  while (front < q.length) {
    let node = q[front++];
    res.push(node);

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
      }
    }
  }
  return res;
}

console.log(bfsOnGraph([[1, 2], [0, 3], [0, 4], [1], [2]]));
