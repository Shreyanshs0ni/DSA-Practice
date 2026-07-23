function helper(dp, index) {
  if (index === 0) return 0;
  if (index === 1) return 1;

  if (dp[index] !== -1) return dp[index];
  return (dp[index] = helper(dp, index - 1) + helper(dp, index - 2));
}

function fib(n) {
  let dp = new Array(n + 1).fill(-1);
  return helper(dp, n);
}

console.log(fib(3));

//tc -> O(n)
//sc -> O(n) + O(n)
