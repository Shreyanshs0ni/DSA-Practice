let maxDistance = 0;
function height(root) {
  if (!root) return 0;
  let lh = height(root.left);
  let rh = height(root.right);
  return 1 + Math.max(rh, lh);
}

function diameterOfTree(root) {
  if (!root) return 0;
  let lh = height(root.left);
  let rh = height(root.right);

  if (maxDistance < lh + rh) {
    maxDistance = lh + rh;
  }
  diameterOfTree(root.left);
  diameterOfTree(root.right);
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
