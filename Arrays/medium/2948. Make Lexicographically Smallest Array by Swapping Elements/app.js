/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */

var lexicographicallySmallestArray = function (nums, limit) {
  let sortedNums = nums.map((num, i) => [num, i]).sort((a, b) => a[0] - b[0]);
  let indexToGroups = new Map();
  let group = 0;
  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i][0] - sortedNums[i - 1][0] > limit) {
      group++;
    }
    indexToGroups.set(sortedNums[i][1], group);
  }

  let groupToIndices = new Map();
  for (let index of indexToGroups.keys()) {
    let group = indexToGroups.get(index);

    if (!groupToIndices.has(group)) {
      groupToIndices.set(group, []);
    }
    groupToIndices.get(group).push(index);
  }
  for (let group of groupToIndices.keys()) {
    groupToIndices.get(group).sort((a, b) => a - b);
  }
  let res = new Array(nums.length);
  let j = 0;
  for (let key of groupToIndices.keys()) {
    for (let i = 0; i < groupToIndices.get(key).length; i++) {
      res[groupToIndices.get(key)[i]] = sortedNums[j][0];
      j++;
    }
  }

  return res;
};

console.log(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2)); //[1,3,5,8,9]
console.log(lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3)); //[1,6,7,18,1,2]
console.log(lexicographicallySmallestArray([1, 7, 28, 19, 10], 3)); //[1,7,28,19,10]
