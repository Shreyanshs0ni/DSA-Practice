function helper(nums, index) {
  if (index < 0) return 0;

  let pick = helper(nums, index - 2) + nums[index];
  let notPick = helper(nums, index - 1);
  return Math.max(pick, notPick);
}
function houseRobberII(nums) {
  return helper(nums, nums.length - 1);
}

console.log(houseRobberII([2, 1, 4, 9])); //10
console.log(houseRobberII([1, 5, 2, 1, 6])); //11
