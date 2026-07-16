function jobSequencing(N, Jobs) {
  Jobs.sort((a, b) => b[2] - a[2]);

  let maxDeadLine = Jobs[0][1];
  for (let i = 1; i < N; i++) {
    maxDeadLine = Math.max(maxDeadLine, Jobs[i][1]);
  }
  let slot = new Array(maxDeadLine + 1).fill(-1);
  let countJobs = 0;
  let jobProfit = 0;

  for (i = 0; i < N; i++) {
    for (let j = Jobs[i][1]; j > 0; j--) {
      if (slot[j] === -1) {
        slot[j] = i;
        countJobs++;
        jobProfit += Jobs[i][2];
        break;
      }
    }
  }
  return [countJobs, jobProfit];
}

console.log(
  jobSequencing(4, [
    [1, 4, 20],
    [2, 1, 10],
    [3, 1, 40],
    [4, 1, 30],
  ]),
);

console.log(
  jobSequencing(5, [
    [1, 2, 100],
    [2, 1, 19],
    [3, 2, 27],
    [4, 1, 25],
    [5, 1, 15],
  ]),
);
