function find(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) return true;
    if (nums[low] == nums[mid] && nums[mid] == nums[high]) {
      high--, low++;
      continue;
    }

    if (nums[low] < nums[mid]) {
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
  return false;
}

const arr = [3, 1, 2, 3, 3, 3, 3];
const k = 4;
console.log(find(arr, k));
