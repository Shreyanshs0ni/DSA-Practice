function findCeil(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    //may an answer
    if (nums[mid] >= target) {
      ans = nums[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function findFloor(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);

    if (nums[mid] <= target) {
      ans = nums[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const k = 85;
console.log(findFloor(arr, k));
console.log(findCeil(arr, k));
