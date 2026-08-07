var longestOnes = function (nums, k) {
  let maxLength = 0;
  let i = 0;
  let j = 0;
  let zeros = 0;
  while (j < nums.length) {
    if (nums[j] === 0) zeros++;
    while (zeros > k) {
      if (nums[i] === 0) zeros--;
      i++;
    }
    maxLength = Math.max(maxLength, j - i + 1);
    j++;
  }

  return maxLength;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);
