function countBits(n) {
  let cnt = 0;
  while (n > 0) {
    cnt += n & 1;
    n >>= 1;
  }
  return cnt;
}

console.log(countBits(5));
console.log(countBits(15));
