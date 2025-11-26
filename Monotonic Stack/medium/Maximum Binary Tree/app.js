function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var constructMaximumBinaryTree = function (nums) {
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    let x = new TreeNode(nums[i]);
    while (stack.length && x.val > stack[stack.length - 1].val) {
      let node = stack.pop();
      x.left = node;
    }
    if (stack.length) stack[stack.length - 1].right = x;
    stack.push(x);
  }
  return stack[0];
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])); //6,3,5,null,2,0,null,null,1
