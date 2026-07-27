function maxSubarraySum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(sum, max);
    }
  }

  return max;
}

console.log(maxSubarraySum([2, 3, 5, -2, 7, -4]));

console.log(maxSubarraySum([-2, -3, -7, -2, -10, -4]));
