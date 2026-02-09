/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let count = { a: 0, b: 0, c: 0 };
  let left = 0,
    ans = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]]++;

    while (count.a > 0 && count.b > 0 && count.c > 0) {
      ans += s.length - right;
      count[s[left]]--;
      left++;
    }
  }
  return ans;
};
