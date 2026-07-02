class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function CheckIfTheBinaryTreeIsBalanced(root) {
  if (!root) return true;
  let lh = height(root.left);
  let rh = height(root.right);

  if (Math.abs(lh - rh) > 1) {
    return false;
  }
  return (
    CheckIfTheBinaryTreeIsBalanced(root.left) &&
    CheckIfTheBinaryTreeIsBalanced(root.right)
  );
}

// Construct the balanced tree
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), null),
);

console.log(CheckIfTheBinaryTreeIsBalanced(root)); // tru

const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(4))),
);

console.log(CheckIfTheBinaryTreeIsBalanced(root2)); // false
