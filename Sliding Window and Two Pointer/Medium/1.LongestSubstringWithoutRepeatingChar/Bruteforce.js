const LongestSubstringWithoutRepeatingChar = (s) => {
  const n = s.length;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const substring = s.slice(i, j + 1);
      const uniqueChars = new Set(substring);
      if (uniqueChars.size === substring.length) {
        maxLen = Math.max(maxLen, substring.length);
      }
    }
  }
  return maxLen;
};

console.log(LongestSubstringWithoutRepeatingChar("abcabcbb")); // Output: 3
