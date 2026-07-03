function atMostK(s, k) {
  let left = 0;
  let freq = new Map();
  let ans = 0;
  for (let right = 0; right < s.length; right++) {
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);

    while (freq.size > k) {
      freq.set(s[left], freq.get(s[left]) - 1);
      if (freq.get(s[left]) === 0) {
        freq.delete(s[left]);
      }
      left++;
    }

    ans += right - left + 1;
  }
  return ans;
}
function countNumberOfSubstring(s, k) {
  return atMostK(s, k) - atMostK(s, k - 1);
}

console.log(countNumberOfSubstring("pqpqs", 2));
console.log(countNumberOfSubstring("abcbaa", 3));
