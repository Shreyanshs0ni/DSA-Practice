/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let freq = {};

  for (let ch of t) {
    freq[ch] = (freq[ch] || 0) + 1;
    console.log(freq);
  }
  for (let ch of s) {
    freq[ch]--;
    console.log(freq);
  }

  for (let ch in freq) {
    if (freq[ch] === 1) return ch;
  }
};
console.log(findTheDifference("abcd", "abcde"));
// var findTheDifference = function (s, t) {
//   for (let char of s) {
//     t = t.replace(char, "");
//   }
//   return t[0];
// };
