/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  let results = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!results.has(s[i])) {
      results.add(s[i]);
    }
  }

  return results.size;
};

console.log(minimizedStringLength("aaabc")); //3
console.log(minimizedStringLength("cbbd")); //3
console.log(minimizedStringLength("baadccab")); //4
