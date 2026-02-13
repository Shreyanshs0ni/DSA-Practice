/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let ans1 = new Set(nums1);
  nums2.forEach((v) => {
    ans1.delete(v);
  });
  let ans2 = new Set(nums2);
  nums1.forEach((v) => {
    ans2.delete(v);
  });
  return [[...ans1], [...ans2]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6])); //[[1,3][4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); //[[3],[]]
