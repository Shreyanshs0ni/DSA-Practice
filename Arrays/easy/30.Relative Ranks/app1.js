/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let sortedScore = [...score];
  let map = new Map();
  sortedScore.sort((a, b) => b - a);
  let res = [];
  for (let i = 0; i < sortedScore.length; i++) {
    if (i === 0) {
      map.set(sortedScore[i], "Gold Medal");
    } else if (i === 1) {
      map.set(sortedScore[i], "Silver Medal");
    } else if (i === 2) {
      map.set(sortedScore[i], "Bronze Medal");
    } else {
      map.set(sortedScore[i], (i + 1).toString());
    }
  }
  for (let i = 0; i < score.length; i++) {
    res.push(map.get(score[i]));
  }
  return res;
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
