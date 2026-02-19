/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let n = nums.length;
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let missing = -1;
  let repeated = -1;
  for (let i = 1; i <= n; i++) {
    if (!map.has(i)) {
      missing = i;
    }
    if (map.get(i) >= 2) {
      repeated = i;
    }
  }
  return [repeated, missing];
};

console.log(findErrorNums([1, 2, 2, 4])); //[2,3]
console.log(findErrorNums([1, 1])); //[1,2]
