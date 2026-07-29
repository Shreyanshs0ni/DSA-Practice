function maxSatisfied(customers, grumpy, minutes) {
  let res = 0;
  let maxWindow = 0;

  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 0) {
      res += customers[i];
    }
  }
  for (let i = 0; i < grumpy.length - minutes; i++) {
    let maxGrumpy = 0;
    for (let j = i; j < i + minutes; j++) {
      if (grumpy[j] === 1) {
        maxGrumpy += customers[j];
      }
    }
    maxWindow = Math.max(maxWindow, maxGrumpy);
  }

  return res + maxWindow;
}

console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3),
);
