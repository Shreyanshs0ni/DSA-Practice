function fibonacci(n) {
  let dp = new Array(n + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fibonacci(3));

//tc = O(n)
//sc = O(n)
