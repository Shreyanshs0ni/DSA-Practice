function maxSubarraySum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      max = Math.max(sum, max);
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 3, 5, -2, 7, -4]));

console.log(maxSubarraySum([-2, -3, -7, -2, -10, -4]));
