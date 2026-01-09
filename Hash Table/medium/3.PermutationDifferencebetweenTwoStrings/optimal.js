/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let pos = new Map();
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    pos.set(s[i], i);
  }
  for (let i = 0; i < t.length; i++) {
    res += Math.abs(pos.get(t[i]) - i);
  }

  return res;
};

console.log(findPermutationDifference("abc", "bac")); //2
console.log(findPermutationDifference("abcde", "edbac")); //12
