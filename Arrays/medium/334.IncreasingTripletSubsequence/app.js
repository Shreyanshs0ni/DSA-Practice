function increasingTriplet(nums) {
  let first = Infinity;
  let second = Infinity;
  for (let i of nums) {
    if (i <= first) {
      first = i;
    } else if (i <= second) {
      second = i;
    } else {
      return true;
    }
  }
  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
