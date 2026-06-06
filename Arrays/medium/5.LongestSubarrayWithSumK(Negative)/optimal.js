function longestSubarrayWithSumK(arr, k) {
  let prefixSum = new Map();
  let sum = 0;
  let maxlen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) {
      maxlen = i + 1;
    }
    let rem = sum - k;

    if (prefixSum.has(rem)) {
      let len = i - prefixSum.get(rem);
      maxlen = Math.max(len, maxlen);
    }

    if (!prefixSum.has(sum)) {
      prefixSum.set(sum, i);
    }
  }
  return maxlen;
}
let a = [1, 2, 3, 1, 1, 1, 1, 3, 3];
console.log(longestSubarrayWithSumK(a, 6));
