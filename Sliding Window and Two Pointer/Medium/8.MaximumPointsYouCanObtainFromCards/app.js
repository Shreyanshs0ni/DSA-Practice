const MaxPoint = (nums, k) => {
  let lSum = 0;
  let rSum = 0;

  for (let i = 0; i < k; i++) {
    lSum += nums[i];
  }
  let maxSum = lSum;

  for (let i = 0; i < k; i++) {
    lSum -= nums[k - 1 - i];
    rSum = rSum + nums[nums.length - 1 - i];
    maxSum = Math.max(maxSum, lSum + rSum);
  }
  return maxSum;
};

console.log(MaxPoint([1, 2, 3, 4, 5, 6, 1], 3)); // Output: 12
