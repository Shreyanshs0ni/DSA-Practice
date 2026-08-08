function dfs(i, j, grid, visited) {
  visited[i][j] = true;
  let direction = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  for (let [dx, dy] of direction) {
    let nx = i + dx;
    let ny = j + dy;

    if (
      nx >= 0 &&
      nx < grid.length &&
      ny >= 0 &&
      ny < grid[0].length &&
      grid[nx][ny] === "1" &&
      !visited[nx][ny]
    ) {
      dfs(nx, ny, grid, visited);
    }
  }
}
function numberOfIslands(grid) {
  let visited = Array.from({ length: grid.length }, () =>
    new Array(grid[0].length).fill(false),
  );
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        res++;
        dfs(i, j, grid, visited);
      }
    }
  }
  return res;
}

console.log(
  numberOfIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
);

console.log(
  numberOfIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
