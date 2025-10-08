function findElementInRotatedArray(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

const arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
const n = 9;
console.log(findElementInRotatedArray(arr, n));
