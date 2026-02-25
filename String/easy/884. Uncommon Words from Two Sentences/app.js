/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  let map = new Map();
  let res = [];
  for (let word of s1.split(" ")) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  for (let word of s2.split(" ")) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  for (let key of map.keys()) {
    if (map.get(key) === 1) {
      res.push(key);
    }
  }
  return res;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet","sour"]
console.log(uncommonFromSentences("apple apple", "banana")); // ["banana"]
