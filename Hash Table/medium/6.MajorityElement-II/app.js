/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let n = Math.floor(nums.length / 3);
  let map = new Map();
  let res = [];
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let num of map.keys()) {
    if (map.get(num) > n) {
      res.push(num);
    }
  }
  return res;
};

console.log(majorityElement([3, 2, 3])); //[3]
console.log(majorityElement([1])); //[1]
console.log(majorityElement([1, 2])); //[1,2]
