function frogJump(stairs) {
  let n = stairs.length - 1;

  let prev = 0;
  let prev2 = 0;

  for (let i = 1; i <= n; i++) {
    let fs = prev + Math.abs(stairs[i] - stairs[i - 1]);
    let ss = Infinity;
    if (i > 1) {
      ss = prev2 + Math.abs(stairs[i] - stairs[i - 2]);
    }
    let curi = Math.min(ss, fs);
    prev2 = prev;
    prev = curi;
  }
  return prev;
}
console.log(frogJump([2, 1, 3, 5, 4]));
console.log(frogJump([7, 5, 1, 2, 6]));
