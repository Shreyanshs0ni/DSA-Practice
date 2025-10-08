function powerOf2(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

console.log(powerOf2(10));
