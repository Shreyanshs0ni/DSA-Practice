function checkIthBit(n, i) {
  return (n & (n << i)) !== 0;
}

console.log(checkIthBit(5, 2));
