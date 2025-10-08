function upperBound(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);

    if (nums[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 10];
const k = 6;
console.log(upperBound(arr, k));
