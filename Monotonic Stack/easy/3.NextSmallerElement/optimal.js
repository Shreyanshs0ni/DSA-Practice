const nextSmallerELement = (nums) => {
  let stack = [];
  let res = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) {
      stack.pop();
    }
    res[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[i]);
  }
  return res;
};

const arr = [4, 8, 5, 2, 25];
console.log(nextSmallerELement(arr)); //[2, 5, 2, -1, -1]
console.log(nextSmallerELement([10, 9, 8, 7])); //[9,8,7,-1]
