function find(nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[high]) {
      ans = Math.min(ans, nums[low]);
      break;
    }

    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
    }
  }
  return ans;
}

const arr = [6, 7, 8, 9, 1, 2, 3, 4, 5];
console.log(find(arr));
