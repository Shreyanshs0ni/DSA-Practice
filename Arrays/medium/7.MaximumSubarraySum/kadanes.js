function KadanesAlgorithm(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum === 0;
    }
  }
  return max;
}

console.log(KadanesAlgorithm([2, 3, 5, -2, 7, -4]));

console.log(KadanesAlgorithm([-2, -3, -7, -2, -10, -4]));
