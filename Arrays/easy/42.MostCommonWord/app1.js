/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let words = paragraph
    .toLowerCase()
    .replace(/[!?.,;']/g, " ")
    .split(/\s+/);
  let bannedSet = new Set(banned);
  let maxfreq = 0;
  let freqMap = new Map();
  let res = "";
  for (let word of words) {
    if (word === " " || bannedSet.has(word)) continue;
    let count = (freqMap.get(word) || 0) + 1;
    freqMap.set(word, count);

    if (count > maxfreq) {
      maxfreq = count;
      res = word;
    }
  }
  return res;
};

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ]),
);

console.log(mostCommonWord("a.", []));
