class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function min(root) {
  if (root === null) return null;
  let node = root;
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}
function max(root) {
  if (root === null) return null;
  let node = root;
  while (node.right !== null) {
    node = node.right;
  }
  return node;
}

const root = new TreeNode(
  8,
  new TreeNode(
    3,
    new TreeNode(1),
    new TreeNode(6, new TreeNode(4), new TreeNode(7)),
  ),
  new TreeNode(10, null, new TreeNode(14, new TreeNode(13))),
);

console.log(min(root).value); // 1
console.log(max(root).value); // 14
