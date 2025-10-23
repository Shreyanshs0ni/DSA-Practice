/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let seen = { a: 0, b: 0, c: 0 };
    for (let j = i; j < s.length; j++) {
      seen[s[j]] = 1;
      if (seen.a + seen.b + seen.c == 3) {
        count += s.length - j;
        break;
      }
    }
  }
  return count;
};