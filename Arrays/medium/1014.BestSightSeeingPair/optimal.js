var maxScoreSightseeingPair = function (values) {
  let best = values[0];
  let maxScore = -Infinity;
  for (let j = 1; j < values.length; j++) {
    let score = best + values[j] - j;
    maxScore = Math.max(maxScore, score);

    best = Math.max(best, values[j] + j);
  }
  return maxScore;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
console.log(maxScoreSightseeingPair([1, 2]));
