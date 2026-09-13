/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  let n = img1.length;
  let answer = 0;
  for (let down = -(n - 1); down < n; down++) {
    for (let right = -(n - 1); right < n; right++) {
      let count = 0;
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
          if (img1[row][col] === 1) {
            let newRow = row + down;
            let newCol = col + right;

            if (
              newRow >= 0 &&
              newRow < n &&
              newCol >= 0 &&
              newCol < n &&
              img2[newRow][newCol] === 1
            ) {
              count++;
            }
          }
        }
      }
      answer = Math.max(answer, count);
    }
  }
  return answer;
};

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
  ),
);
console.log(largestOverlap([[1]], [[1]]));
console.log(largestOverlap([[0]], [[0]]));
