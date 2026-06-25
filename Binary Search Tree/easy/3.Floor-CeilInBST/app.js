class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function floor(root, target) {
  let node = root;
  let floor = null;
  while (node !== null) {
    if (node.value <= target) {
      floor = node.value;
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return floor;
}

function ceil(root, target) {
  let node = root;
  let ceil = null;
  while (node !== null) {
    if (node.value >= target) {
      ceil = node.value;
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return ceil;
}

const root = new TreeNode(
  8,
  new TreeNode(4, new TreeNode(2), new TreeNode(6)),
  new TreeNode(12, new TreeNode(10), new TreeNode(14)),
);

console.log(floor(root, 5)); // 4
console.log(ceil(root, 5)); // 6

console.log(floor(root, 12)); // 12
console.log(ceil(root, 12)); // 12

console.log(floor(root, 1)); // -1
console.log(ceil(root, 15)); // -1
