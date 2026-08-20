function numberOfNGEsToTheRight(nums) {
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }
  return stack;
}

console.log(numberOfNGEsToTheRight([1, 3, 2, 4])); //[3,4,4,-1]
console.log(numberOfNGEsToTheRight([6, 8, 0, 1, 3])); //[8,-1,1,3,-1]
