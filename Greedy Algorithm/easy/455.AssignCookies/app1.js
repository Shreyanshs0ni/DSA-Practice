function assignCookie(children, cookies) {
  if (children.length === 0 || cookies.length === 0) return 0;
  let sortedChildren = children.sort((a, b) => a - b);
  let sortedCookies = cookies.sort((a, b) => a - b);
  let childrenPointer = 0;
  let cookiesPointer = 0;
  let count = 0;
  while (
    childrenPointer < sortedChildren.length &&
    cookiesPointer < sortedCookies.length
  ) {
    if (sortedChildren[childrenPointer] <= sortedCookies[cookiesPointer]) {
      childrenPointer++;
      cookiesPointer++;
      count++;
    } else {
      cookiesPointer++;
    }
  }
  return count;
}

console.log(assignCookie([1, 2, 3], [1, 1]));
console.log(assignCookie([1, 2], [1, 2, 3]));
