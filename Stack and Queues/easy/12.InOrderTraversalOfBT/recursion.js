function inorder(root) {
  if (root === null) return [];

  let left = inorderTraversal(root.left);
  let right = inorderTraversal(root.right);

  return [...left, root.val, ...right];
}
