var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    if (start <= ans[ans.length - 1][1]) {
      ans[ans.length - 1][1] = Math.max(end, ans[ans.length - 1][1]);
    } else {
      ans.push([start, end]);
    }
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
