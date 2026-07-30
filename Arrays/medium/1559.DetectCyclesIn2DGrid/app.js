let directions = [
  [0, -1],
  [-1, 0],
  [1, 0],
  [0, 1],
];

function dfs(r, c, prev_r, prev_c, grid, visited) {
  visited[r][c] = true;

  for (let [dx, dy] of directions) {
    let nr = dx + r;
    let nc = dy + c;

    if (
      nr >= 0 &&
      nr < grid.length &&
      nc >= 0 &&
      nc < grid[0].length &&
      grid[nr][nc] === grid[r][c]
    ) {
      if (nr === prev_r && nc === prev_c) continue;
      if (visited[nr][nc]) return true;
      if (dfs(nr, nc, r, c, grid, visited)) return true;
    }
  }
  return false;
}

function containsCycles(grid) {
  let visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false),
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && dfs(i, j, -1, -1, grid, visited)) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  containsCycles([
    ["a", "a", "a", "a"],
    ["a", "b", "b", "a"],
    ["a", "b", "b", "a"],
    ["a", "a", "a", "a"],
  ]),
);

console.log(
  containsCycles([
    ["a", "b", "b"],
    ["b", "z", "b"],
    ["b", "b", "a"],
  ]),
);
