function bfsOnGraph(V, adj) {
  let visited = new Array(V).fill(false);
  visited[0] = true;
  let q = [0];
  let front = 0;
  let ans = [];

  while (front < q.length) {
    let node = q[front++];
    ans.push(node);

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        q.push(neighbor);
      }
    }
  }
  return ans;
}

console.log(bfsOnGraph(5, [[1, 2], [0, 3], [0, 4], [1], [2]]));
