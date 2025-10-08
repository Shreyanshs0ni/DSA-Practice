function find(nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  let index = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[high]) {
      if (nums[low] <= ans) {
        ans = nums[low];
        index = low;
      }
      break;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= ans) {
        ans = nums[low];
        index = low;
      }
      low = mid + 1;
    } else {
      if (nums[mid] <= ans) {
        ans = nums[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }
  return index;
}

const arr = [5, 6, 1, 2, 3, 4];
console.log(find(arr));
