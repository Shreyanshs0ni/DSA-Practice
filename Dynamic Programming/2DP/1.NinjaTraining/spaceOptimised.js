function ninjaTraining(days) {
  let n = days.length;
  let dp = Array.from({ length: n }, () => new Array(4).fill(-1));
  dp[0][0] = Math.max(days[0][1], days[0][2]);
  dp[0][1] = Math.max(days[0][0], days[0][2]);
  dp[0][2] = Math.max(days[0][0], days[0][1]);
  dp[0][3] = Math.max(days[0][0], days[0][1], days[0][2]);

  for (let day = 1; day < n; day++) {
    for (let last = 0; last < 4; last++) {
      dp[day][last] = 0;
      for (let task = 0; task < 3; task++) {
        if (task !== last) {
          let points = days[day][task] + dp[day - 1][task];
          dp[day][last] = Math.max(dp[day][last], points);
        }
      }
    }
  }
  return dp[n - 1][3];
}

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
