function count(ind, sum, nums) {
  if (sum === 0) return 1;
  if (sum < 0 || ind === nums.length) return 0;
  return count(ind + 1, sum - nums[ind], nums) + count(ind + 1, sum, nums);
}

function countSubsWithTarget(target, nums) {
  return count(0, target, nums);
}

let target = 5;
let nums = [1, 2, 3];
console.log(countSubsWithTarget(target, nums));
