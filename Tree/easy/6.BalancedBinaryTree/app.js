/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function height(node) {
    if (!node) return 0;

    const leftHeight = height(node.left);
    if (leftHeight === -1) return -1; // left subtree unbalanced

    const rightHeight = height(node.right);
    if (rightHeight === -1) return -1; // right subtree unbalanced

    if (Math.abs(leftHeight - rightHeight) > 1) return -1; // current node unbalanced

    return Math.max(leftHeight, rightHeight) + 1; // return height
  }

  return height(root) !== -1;
};
