const nextSmallerELement = (nums) => {
  let res = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        res[i] = nums[j];
        break;
      }
    }
  }
  return res;
};

console.log(nextSmallerELement([4, 8, 5, 2, 25])); //[2, 5, 2, -1, -1]
console.log(nextSmallerELement([10, 9, 8, 7])); //[9,8,7,-1]
