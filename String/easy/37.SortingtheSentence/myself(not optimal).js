/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let arr = s.split(" ");
  let map = new Map();
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    map.set(
      parseInt(arr[i][arr[i].length - 1], 10),
      arr[i].slice(0, arr[i].length - 1),
    );
  }
  let sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));
  for (let word of sortedMap.values()) {
    res += word + " ";
  }
  return res.trim();
};

console.log(sortSentence("is2 sentence4 This1 a3")); //"This is a sentence"
console.log(sortSentence("Myself2 Me1 I4 and3")); //"me myself and i"
