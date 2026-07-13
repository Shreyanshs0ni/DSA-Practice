var nextGreaterElements = function (nums) {
  let n = nums.length;
  let stack = [];
  let res = new Array(n);

  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }
    if (i < n) {
      res[i] = stack.length ? stack[stack.length - 1] : -1;
    }
    stack.push(nums[i % n]);
  }
  return res;
};

console.log(nextGreaterElements([1, 2, 1])); //[2,-1,2]
console.log(nextGreaterElements([1, 2, 3, 4, 3])); //[2,3,4,-1,4]
