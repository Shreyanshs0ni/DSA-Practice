function frogJump(stairs, n) {
  if (n === 0) return 0;

  let left = frogJump(stairs, n - 1) + Math.abs(stairs[n] - stairs[n - 1]);

  let right = Infinity;
  if (n > 1) {
    right = frogJump(stairs, n - 2) + Math.abs(stairs[n] - stairs[n - 2]);
  }
  return Math.min(left, right);
}

console.log(frogJump([2, 1, 3, 5, 4], 4));
console.log(frogJump([7, 5, 1, 2, 6], 4));
