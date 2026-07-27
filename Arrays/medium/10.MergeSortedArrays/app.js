function mergeArrays(nums1, nums2) {
  let i = nums1.length - nums2.length - 1;
  let j = nums2.length - 1;
  let k = nums1.length - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  return nums1;
}

console.log(mergeArrays([1, 2, 3, 0, 0, 0], [2, 5, 6]));
