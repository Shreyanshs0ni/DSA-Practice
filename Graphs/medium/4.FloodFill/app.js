function floodFill(image, sr, sc, color) {
  const original = image[sr][sc];
  if (original === color) return image;

  let n = image.length;
  let m = image[0].length;

  let q = [[sr, sc]];

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (q.length > 0) {
    let [x, y] = q.shift();
    image[x][y] = color;

    for (let [dx, dy] of directions) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      if (image[nx][ny] === original) {
        q.push([nx, ny]);
      }
    }
  }

  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0,
  ),
);
