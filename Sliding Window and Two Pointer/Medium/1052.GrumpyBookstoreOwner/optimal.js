function maxSatisfied(customers, grumpy, minutes) {
  let baseSatisfied = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      baseSatisfied += customers[i];
    }
  }

  let windowSum = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) windowSum += customers[i];
  }

  let maxWindow = windowSum;
  for (let i = minutes; i < customers.length; i++) {
    if (grumpy[i - minutes] === 1) {
      windowSum -= customers[i - minutes];
    }

    if (grumpy[i] === 1) {
      windowSum += customers[i];
    }
    maxWindow = Math.max(maxWindow, windowSum);
  }

  return baseSatisfied + maxWindow;
}

console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3),
);
