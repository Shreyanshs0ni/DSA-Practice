function longestContiguousSubarray(nums) {
  let i = 0;
  let map = new Map();
  let maxLength = 0;
  let j = 0;
  while (j < nums.length) {
    map.set(nums[j], (map.get(nums[j]) || 0) + 1);
    while (map.size > 2) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) - 1);
      }
      if (map.get(nums[i]) === 0) {
        map.delete(nums[i]);
      }
      i++;
    }
    maxLength = Math.max(maxLength, j - i + 1);
    j++;
  }
  return maxLength;
}

console.log(longestContiguousSubarray([1, 2, 1, 2, 3]));
console.log(longestContiguousSubarray([0, 1, 2, 2]));
