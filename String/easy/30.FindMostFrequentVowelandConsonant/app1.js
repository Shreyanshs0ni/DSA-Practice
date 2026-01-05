/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let freq = {};
  let consonent = 0;
  let vowel = 0;
  for (let c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  for (let ch in freq) {
    if ("aeiou".includes(ch)) {
      vowel = Math.max(freq[ch], vowel);
    } else {
      consonent = Math.max(freq[ch], consonent);
    }
  }
  return vowel + consonent;
};
console.log(maxFreqSum("aeiaeia")); //3
console.log(maxFreqSum("successes")); //6
