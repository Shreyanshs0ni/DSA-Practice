class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function isLeaf(root) {
  return !root.left && !root.right;
}
function addLeft(root, res) {
  let curr = root.left;
  while (curr) {
    if (!isLeaf(curr)) {
      res.push(curr.value);
    }
    if (curr.left) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
}
function addLeafs(root, res) {
  if (isLeaf(root)) {
    res.push(root.value);
  }
  if (root.left) {
    addLeafs(root.left, res);
  }
  if (root.right) {
    addLeafs(root.right, res);
  }
}
function addRight(root, res) {
  let curr = root.right;
  let temp = [];
  while (curr) {
    if (!isLeaf(curr)) {
      temp.push(curr.value);
    }
    if (curr.right) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  while (temp.length) {
    res.push(temp.pop());
  }
}
function BoundaryTraversal(root) {
  if (!root) return [];
  let res = [];
  if (!isLeaf(root)) {
    res = [root.value];
  }
  addLeft(root, res);
  addLeafs(root, res);
  addRight(root, res);
  return res;
}

// Example Tree
//
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
//

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);

console.log(BoundaryTraversal(root));
