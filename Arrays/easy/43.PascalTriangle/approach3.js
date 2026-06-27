function nCr(n, r) {
  let ans = 1;
  for (let i = 0; i < r; i++) {
    ans = (ans * (n - i)) / (i + 1);
  }
  return ans;
}

function printTriangle(n) {
  let ans = [];
  for (let row = 1; row <= n; row++) {
    let temp = [];
    for (let column = 1; column <= row; column++) {
      temp.push(nCr(row - 1, column - 1));
    }
    ans.push(temp);
  }
  return ans;
}

console.log(printTriangle(5));
