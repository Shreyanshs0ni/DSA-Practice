const nge = (nums) => {
  let stack = [];
  let n = nums.length;
  let result = new Array(n);

  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }
    if (i < n) {
      result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    }
    stack.push(nums[i % n]);
  }
  return result;
};

const nums = [1, 2, 3, 4, 3];
console.log(nge(nums));
