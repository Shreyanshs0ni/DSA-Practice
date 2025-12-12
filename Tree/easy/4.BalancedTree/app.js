const minDepth = (root) => {
  if (root == null) return 0;
  let leftDepth = minDepth(root.left);
  let rigthDepth = minDepth(root.right);
  if (leftDepth == 0 || rigthDepth == 0)
    return Math.max(leftDepth, rigthDepth) + 1;
  return Math.max(leftDepth, rigthDepth + 1);
};
