function findSingleElement(nums) {
  if (nums.length == 1) return nums[0];
  if (nums[0] != nums[1]) return nums[0];
  if (nums[nums.length - 1] != nums[nums.length - 2])
    return nums[nums.length - 1];
  let low = 1;
  high = nums.length - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1])
      return nums[mid];

    if (
      (mid % 2 == 1 && nums[mid - 1] == nums[mid]) ||
      (mid % 2 == 0 && nums[mid + 1] == nums[mid])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

const arr = [1, 1, 2, 2, 3, 3, 5, 5, 6, 7, 7, 8, 8];
console.log(findSingleElement(arr));
