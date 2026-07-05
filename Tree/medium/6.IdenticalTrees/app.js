class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function checkIf2TreesAreIdentical(root1, root2) {
  if (root1 && !root2) return false;
  if (!root1 && root2) return false;
  if (!root1 && !root2) return true;
  if (root1.value !== root2.value) return false;

  let left = checkIf2TreesAreIdentical(root1.left, root2.left);
  let right = checkIf2TreesAreIdentical(root1.right, root2.right);

  return left && right;
}
