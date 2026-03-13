/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let ans = "";

  for (let i = 0; i < nums.length; i++) {
    ans += nums[i][i] === "0" ? "1" : "0";
  }

  return ans;
};
