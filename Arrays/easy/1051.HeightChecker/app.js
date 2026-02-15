/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let res = 0;
  sortedHeights = [...heights];
  sortedHeights = sortedHeights.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      res++;
    }
  }
  return res;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); //[1,1,1,2,3,4] //3
console.log(heightChecker([5, 1, 2, 3, 4])); //5
console.log(heightChecker([1, 2, 3, 4, 5])); //0
