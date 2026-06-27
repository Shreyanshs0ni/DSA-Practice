function printRow(n) {
  let ans = 1;
  console.log(ans);
  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i + 1;
    console.log(ans);
  }
}

printRow(5);
