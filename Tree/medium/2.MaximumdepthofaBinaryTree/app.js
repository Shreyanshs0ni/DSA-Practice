class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function maxDepthOfTree(root) {
  if (!root) return 0;
  let lh = maxDepthOfTree(root.left);
  let rh = maxDepthOfTree(root.right);
  return 1 + Math.max(lh, rh);
}
// Construct the tree
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
  new TreeNode(3),
);
console.log(maxDepthOfTree(root)); // 4
