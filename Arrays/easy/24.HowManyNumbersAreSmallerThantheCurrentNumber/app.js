/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let numSet = {};
  let res = [];
  let copy = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < copy.length; i++) {
    if (numSet[copy[i]] === undefined) {
      numSet[copy[i]] = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    res.push(numSet[nums[i]]);
  }
  return res;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
