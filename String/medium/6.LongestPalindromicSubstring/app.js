function longestPalindromicSubstring(s) {
  let res = "";
  let resLen = 0;
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > resLen) {
        res = s.substring(left, right + 1);
        resLen = right - left + 1;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    //odd Length
    expand(i, i);
    //even Length
    expand(i, i + 1);
  }
  return res;
}

console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("cbbd"));
