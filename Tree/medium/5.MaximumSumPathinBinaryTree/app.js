class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
let maxPath = -Infinity;
function dfs(root) {
  if (!root) return 0;
  let left = Math.max(0, dfs(root.left));
  let right = Math.max(0, dfs(root.right));
  maxPath = Math.max(maxPath, left + root.value + right);
  return root.value + Math.max(left, right);
}
function maximumSumPath(root) {
  maxSum = -Infinity;
  dfs(root);
  return maxPath;
}

const root = new Node(1, new Node(2), new Node(3));
console.log(maximumSumPath(root)); // 6
const root1 = new Node(
  -10,
  new Node(9),
  new Node(20, new Node(15), new Node(7)),
);
console.log(maximumSumPath(root1)); // 42
