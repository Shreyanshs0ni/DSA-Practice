class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function search(root, target) {
  let node = root;
  while (node !== null) {
    if (node.value === target) {
      return node;
    }
    if (target < node.value) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return null;
}

const root = new TreeNode(
  8,
  new TreeNode(
    3,
    new TreeNode(1),
    new TreeNode(
      6,
      new TreeNode(4),
      new TreeNode(7)
    )
  ),
  new TreeNode(
    10,
    null,
    new TreeNode(
      14,
      new TreeNode(13)
    )
  )
);

console.log(search(root, 6));   // TreeNode { value: 6, ... }
console.log(search(root, 13));  // TreeNode { value: 13, ... }
console.log(search(root, 5));   // null