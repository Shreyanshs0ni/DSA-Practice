const merge = (nums1, m, nums2, n) => {
  let i = m - 1; //pointer for num1
  let j = n - 1; //pointer for num2
  let k = m + n - 1; //pointer for placement in nums1

  //merge in reverse order
  while (j >= 0) {
    if (j >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};
