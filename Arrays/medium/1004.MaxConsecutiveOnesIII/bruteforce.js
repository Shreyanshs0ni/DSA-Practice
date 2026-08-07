var longestOnes = function (nums, k) {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let zeros = 0;
    let j = i;
    while (zeros <= k && j < nums.length) {
      if (nums[j] === 0) {
        zeros++;
      }
      if (zeros > k) break;
      maxLength = Math.max(maxLength, j - i + 1);

      j++;
    }
  }
  return maxLength;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);
