function reversal(nums, start, end) {
  let i = start;
  let j = end;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  return nums;
}

var rotate = function (nums, k) {
  k = k % nums.length;
  reversal(nums, 0, nums.length - k - 1);
  reversal(nums, nums.length - k, nums.length - 1);
  reversal(nums, 0, nums.length - 1);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
