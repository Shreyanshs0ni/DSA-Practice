/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let max_len = 0;
  let char_set = new Set();

  for (let right = 0; right < s.length; right++) {
    while (char_set.has(s[right])) {
      char_set.delete(s[left]);
      left++;
    }
    char_set.add(s[right]);

    max_len = Math.max(max_len, right - left + 1);
  }
  return max_len;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
