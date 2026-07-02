class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function height(root) {
  if (!root) return 0;
  let lh = height(root.left);
  let rh = height(root.right);
  if (lh === -1) return -1;
  if (rh === -1) return -1;
  if (Math.abs(rh - lh) > 1) {
    return -1;
  }
  return 1 + Math.max(lh, rh);
}

function CheckIfTheBinaryTreeIsBalanced(root) {
  return height(root) !== -1;
}

// Construct the balanced tree
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), null),
);

console.log(CheckIfTheBinaryTreeIsBalanced(root)); // true

const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(4))),
);

console.log(CheckIfTheBinaryTreeIsBalanced(root2)); // false
