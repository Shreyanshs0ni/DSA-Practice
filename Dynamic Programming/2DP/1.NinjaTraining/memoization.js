function helper(dp, days, index, last) {
  if (index === 0) {
    if (dp[0][last] !== -1) return dp[0][last];
    let maxi = 0;
    for (let i = 0; i < 3; i++) {
      if (i !== last) {
        maxi = Math.max(maxi, days[0][i]);
      }
    }
    return maxi;
  }
  if (dp[index][last] !== -1) return dp[index][last];

  let maxi = 0;
  for (let i = 0; i < 3; i++) {
    if (i !== last) {
      let points = days[index][i] + helper(dp, days, index - 1, i);
      maxi = Math.max(maxi, points);
    }
  }
  return (dp[index][last] = maxi);
}

function ninjaTraining(days) {
  let n = days.length;
  let dp = Array.from({ length: n }, () => new Array(4).fill(-1));
  return helper(dp, days, n - 1, 3);
}

function main() {
  console.log(
    ninjaTraining([
      [10, 40, 70],
      [20, 50, 80],
      [30, 60, 90],
    ]),
  );

  console.log(
    ninjaTraining([
      [70, 40, 10],
      [180, 20, 5],
      [200, 60, 30],
    ]),
  );
}

main();
