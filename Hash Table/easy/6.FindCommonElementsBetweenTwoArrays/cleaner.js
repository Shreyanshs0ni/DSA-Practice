/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  const ans1 = nums1.filter((n) => set2.has(n)).length;
  const ans2 = nums2.filter((n) => set1.has(n)).length;
  return [ans1, ans2];
};

console.log(findIntersectionValues([2, 3, 2], [1, 2])); //[2,1]
console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); //[3,4]
console.log(findIntersectionValues([3, 4, 2, 3], [1, 5])); //[0,0]
