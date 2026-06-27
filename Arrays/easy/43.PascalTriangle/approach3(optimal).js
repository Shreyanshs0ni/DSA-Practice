function printRow(n) {
  let res = [];
  let ans = 1;
  res.push(ans);
  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i;
    res.push(ans);
  }
  return res;
}

function printTriangle(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(printRow(i));
  }
  return res;
}

console.log(printTriangle(5));
console.log(printRow(5));
