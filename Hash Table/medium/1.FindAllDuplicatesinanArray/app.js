/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let map = new Map();
  let res = [];
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) === 2) {
      res.push(num);
    }
  }
  return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); //[2,3]
console.log(findDuplicates([1, 1, 2])); //[1]
console.log(findDuplicates([1])); //[]
