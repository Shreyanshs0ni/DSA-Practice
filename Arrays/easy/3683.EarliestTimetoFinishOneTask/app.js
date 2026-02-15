/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
  let minTime = tasks[0][0] + tasks[0][1];
  for (let i = 1; i < tasks.length; i++) {
    if (minTime > tasks[i][0] + tasks[i][1])
      minTime = tasks[i][0] + tasks[i][1];
  }
  return minTime;
};

console.log(
  earliestTime([
    [1, 6],
    [2, 3],
  ]),
); //5
console.log(
  earliestTime([
    [100, 100],
    [100, 100],
    [100, 100],
  ]),
); //200
