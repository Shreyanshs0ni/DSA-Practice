var maxScoreSightseeingPair = function (values) {
  let maxScore = -Infinity;

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      let score = values[i] + values[j] + i - j;
      maxScore = Math.max(score, maxScore);
    }
  }
  return maxScore;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
console.log(maxScoreSightseeingPair([1, 2]));
