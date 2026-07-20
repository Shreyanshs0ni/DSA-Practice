function houseRobber(nums) {
  let prev = nums[0];
  let prev2 = 0;

  for (let i = 1; i < nums.length; i++) {
    let pick = nums[i];
    if (i > 1) {
      pick += prev2;
    }
    let notPick = prev;
    let curr = Math.max(pick, notPick);
    prev2 = prev;
    prev = curr;
  }
  return prev;
}

console.log(houseRobber([1, 2, 3, 1]));
console.log(houseRobber([2, 7, 9, 3, 1]));
