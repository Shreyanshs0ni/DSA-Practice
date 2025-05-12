function findLowerBound(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    //may an answer
    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

const arr = [1, 2, 3, 4, 5, 5, 7, 7, 8, 9, 10];
const k = 6;
console.log(findLowerBound(arr, k));
