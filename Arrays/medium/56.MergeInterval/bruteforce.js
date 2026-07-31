var merge = function (intervals) {
  let n = intervals.length;

  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [];
  for (let i = 0; i < n; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if (intervals[j][0] <= end) {
        end = Math.max(end, intervals[j][1]);
      } else {
        break;
      }
    }
    ans.push([start, end]);
  }

  return ans;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ]),
);

console.log(
  merge([
    [4, 7],
    [1, 4],
  ]),
);
