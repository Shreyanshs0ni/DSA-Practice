function checkSetOrNot(n, pos) {
  let binary = n.toString(2);
  if (pos >= binary.length) return false;

  return binary[binary.length - 1 - pos] === "1";
}

console.log(checkSetOrNot(5, 0));
console.log(checkSetOrNot(10, 1));
