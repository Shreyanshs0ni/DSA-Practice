function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var bstToGst = function (root) {
  let sum = 0;

  function traverse(node) {
    if (!node) return;
    traverse(node.right);
    sum += node.val;
    node.val = sum;
    traverse(node.left);
  }

  traverse(root);
  return root;
};

// Test case
const root = new TreeNode(4, new TreeNode(1), new TreeNode(6));

const result = bstToGst(root);
console.log(JSON.stringify(result, null, 2));
