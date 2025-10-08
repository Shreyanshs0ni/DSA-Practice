function setRightmost(n) {
  return n | (n + 1);
}
function unsetRightmost(n) {
  return n & (n - 1);
}

console.log(setRightmost(18));
console.log(unsetRightmost(19));
