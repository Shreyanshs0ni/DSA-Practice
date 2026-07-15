function rottenOranges(grid) {
  const n = grid.length;
  const m = grid[0].length;

  // let visited = new Array(grid.length).fill(false);

  let rotten = [];

  let total = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== 0) total++;

      if (grid[i][j] === 2) {
        rotten.push([i, j]);
      }
    }
  }
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let minutes = 0;

  while (rotten.length > 0) {
    let k = rotten.length;
    count += k;

    for (let i = 0; i < k; i++) {
      let [x, y] = rotten.shift();

      for (let [dx, dy] of directions) {
        let nx = x + dx;
        let ny = y + dy;

        if (nx < 0 || ny < 0 || nx >= n || ny >= m || grid[nx][ny] !== 1)
          continue;

        grid[nx][ny] = 2;

        rotten.push([nx, ny]);
      }
    }
    if (rotten.length > 0) minutes++;
  }
  return total === count ? minutes : -1;
}

console.log(
  rottenOranges([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);

console.log(
  rottenOranges([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
);
console.log(rottenOranges([[0, 2]]));
