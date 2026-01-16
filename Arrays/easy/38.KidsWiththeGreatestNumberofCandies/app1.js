/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let res = [];
  for (let candy of candies) {
    if (candy + extraCandies >= max) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //[true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); //[true, false, false, false, false];
console.log(kidsWithCandies([12, 1, 12], 10)); //[true,false,true]
