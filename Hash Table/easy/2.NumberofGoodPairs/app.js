/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let map = new Map();
  let res = 0;
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let n of map.values()) {
    res += (n * (n - 1)) / 2;
  }
  return res;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); //4
console.log(numIdenticalPairs([1, 1, 1, 1])); //6
console.log(numIdenticalPairs([1, 2, 3])); //0
