function brokenCalc(start, target) {
  if (start === target) return 0;
  if (target <= start) return start - target;

  if (target % 2 === 0) {
    return brokenCalc(start, target / 2) + 1;
  } else {
    return brokenCalc(start, target + 1) + 1;
  }
}

console.log(brokenCalc(2, 3));
console.log(brokenCalc(5, 8));
console.log(brokenCalc(3, 10));
