/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let arr = s.split(" ");
  let res = new Array(arr.length);
  for (let word of arr) {
    res[word[word.length - 1] - 1] = word.slice(0, word.length - 1);
  }
  return res.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3")); //"This is a sentence"
console.log(sortSentence("Myself2 Me1 I4 and3")); //"me myself and i"
