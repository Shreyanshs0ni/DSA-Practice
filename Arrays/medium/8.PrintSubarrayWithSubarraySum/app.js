function KadanesAlgorithm(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let ansStart = -1;
  let ansEnd = -1;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) {
      start = i;
    }
    sum += arr[i];

    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return arr.slice(ansStart, ansEnd + 1);
}

console.log(KadanesAlgorithm([2, 3, 5, -2, 7, -4]));

console.log(KadanesAlgorithm([-2, -3, -7, -2, -10, -4]));
