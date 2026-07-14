function count(ind, sum, nums) {
  if (sum === 0) return 1;

  if (sum < 0 || ind === nums.length) return 0;

  return count(ind + 1, sum - nums[ind], nums) + count(ind + 1, sum, nums);
}
function countAllSubsequencesWithTargetSum(nums, target) {
  return count(0, target, nums);
}
const nums = [1, 2, 3, 4, 5];
const target = 5;

console.log(countAllSubsequencesWithTargetSum(nums, target));
