function helper(start, target) {
  if (start === target) return 0;
  if (target <= start) return start - target;

  let ops1 = 0;
  let ops2 = 0;
  if (target % 2 === 0) {
    ops1 = brokenCalc(start, target / 2);
  } else {
    ops2 = brokenCalc(start, target + 1);
  }
  return ops1 + ops2 + 1;
}
function brokenCalc(startValue, target) {
  return helper(startValue, target);
}

console.log(brokenCalc(2, 3));
console.log(brokenCalc(5, 8));
console.log(brokenCalc(3, 10));
