var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let nextGreater = new Map();
  let ans = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }
    if (stack.length) {
      nextGreater.set(nums2[i], stack[stack.length - 1]);
    } else {
      nextGreater.set(nums2[i], -1);
    }
    stack.push(nums2[i]);
  }
  for (let num of nums1) {
    ans.push(nextGreater.get(num));
  }
  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
