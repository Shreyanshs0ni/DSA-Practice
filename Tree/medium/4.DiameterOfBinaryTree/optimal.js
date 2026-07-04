let maxDistance = 0;

function height(root) {
  if (!root) return 0;

  let lh = height(root.left);
  let rh = height(root.right);

  maxDistance = Math.max(maxDistance, lh + rh);

  return 1 + Math.max(rh, lh);
}

function diameterOfTree(root) {
  maxDistance = 0;
  height(root);
  return maxDistance;
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);

console.log(diameterOfTree(root)); // 3
