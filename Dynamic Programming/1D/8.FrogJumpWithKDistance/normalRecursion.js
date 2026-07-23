function helper(stairs, k, index) {
  if (index === 0) return 0;
  let minSteps = Infinity;
  for (let j = 1; j <= k; j++) {
    if (index - j >= 0) {
      let jump =
        helper(stairs, k, index - j) +
        Math.abs(stairs[index] - stairs[index - j]);
      minSteps = Math.min(minSteps, jump);
    }
  }
  return minSteps;
}
function frogJump(stairs, k) {
  return helper(stairs, k, stairs.length - 1);
}

console.log(frogJump([10, 5, 20, 0, 15], 2));
console.log(frogJump([15, 4, 1, 14, 15], 3));
