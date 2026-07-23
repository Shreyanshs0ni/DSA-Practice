const countingBits = (n) => {
  let ans = [0];

  for (let i = 1; i <= n; i++) {
    ans.push(ans[i >> 1] + (i & 1));
  }
  return ans;
};

console.log(countingBits(4));
