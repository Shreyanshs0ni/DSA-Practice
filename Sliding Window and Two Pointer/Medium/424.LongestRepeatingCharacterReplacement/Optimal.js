/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0,
    r = 0,
    maxLen = 0,
    maxFreq = 0;
  const freq = new Array(26).fill(0);

  while (r < s.length) {
    const index = s.charCodeAt(r) - 65;
    freq[index]++;
    maxFreq = Math.max(maxFreq, freq[index]);

    while (r - l + 1 - maxFreq > k) {
      freq[s.charCodeAt(l) - 65]--;
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
};
