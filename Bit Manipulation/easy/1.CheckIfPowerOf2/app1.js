function powerOf2(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

console.log(powerOf2(10));
console.log(powerOf2(16));
console.log(powerOf2(3));
console.log(powerOf2(8));
