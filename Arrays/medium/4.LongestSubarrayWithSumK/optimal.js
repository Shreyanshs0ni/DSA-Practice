function longestSubarrayWithSumK(arr, k) {
  let n = arr.length;
  let sum = arr[0];
  let len = 0;
  let left = 0;
  let right = 0;
  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum === k) {
      len = Math.max(len, right - left + 1);
    }
    right++;
    if (right < n) sum += arr[right];
  }
  return len;
}
let a = [1, 2, 3, 1, 1, 1, 1, 3, 3];
console.log(longestSubarrayWithSumK(a, 6));
