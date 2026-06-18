function checkSetOrNot(n, pos) {
  return (n & (1 << pos)) !== 0;
}

console.log(checkSetOrNot(5, 0));
console.log(checkSetOrNot(10, 1));
