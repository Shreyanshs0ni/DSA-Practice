function spiralMatrixII(n) {
  let mat = Array.from({ length: n }, () => new Array(n));
  let row = mat.length;
  let column = mat[0].length;
  let top = 0;
  let left = 0;
  let right = column - 1;
  let bottom = row - 1;
  let num = 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      mat[top][i] = num;
      num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      mat[i][right] = num;
      num++;
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        mat[bottom][i] = num;
        num++;
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        mat[i][left] = num;
        num++;
      }
      left++;
    }
  }
  return mat;
}

console.log(spiralMatrixII(3));
