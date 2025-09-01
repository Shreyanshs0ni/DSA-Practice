const nextSmallerELement = (nums) => {
  let stack = [];
  let n = nums.length - 1;
  let result = new Array(n);

  for (let i = n; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
      stack.pop();
    }
    result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(nums[i]);
  }
  return result;
};

//Input: arr = [4, 8, 5, 2, 25]
// Output: [2, 5, 2, -1, -1]

const arr = [4, 8, 5, 2, 25];
console.log(nextSmallerELement(arr));
