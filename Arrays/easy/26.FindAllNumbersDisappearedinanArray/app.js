/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let map = new Map();
  let res = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    map.set(nums[i], true);
  }
  for (let i = 1; i <= n; i++) {
    if (!map.has(i)) {
      res.push(i);
    }
  }
  return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
