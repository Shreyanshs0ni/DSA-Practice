function lowerBound(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
function upperBound(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
function firstAndLastOccurance(nums, target) {
  const lb = lowerBound(nums, target);
  if (lb === nums.length || arr[lb] !== target) {
    return [-1, -1];
  }
  return [lb, upperBound(nums, target) - 1];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9, 10];
const n = 8;
console.log(firstAndLastOccurance(arr, n));
