function helper(nums, i) {
  if (i < 0) return 0;

  let pick = nums[i] + helper(nums, i - 2);
  let notPick = helper(nums, i - 1);

  return Math.max(pick, notPick);
}
function houseRobber(nums) {
  return helper(nums, nums.length - 1);
}

console.log(houseRobber([1, 2, 3, 1]));
console.log(houseRobber([2, 7, 9, 3, 1]));
