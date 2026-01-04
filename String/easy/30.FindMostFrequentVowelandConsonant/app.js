/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let freq = {};
  let con = 0,
    vow = 0;
  for (let c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  for (let ch in freq) {
    if ("aeiou".includes(ch)) vow = Math.max(vow, freq[ch]);
    else con = Math.max(con, freq[ch]);
  }
  return con + vow;
};

console.log(maxFreqSum("aeiaeia")); //3
console.log(maxFreqSum("successes"));
