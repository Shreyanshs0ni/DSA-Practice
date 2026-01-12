/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let j = 0;
  let map = new Map();
  for (let ch of key) {
    if (ch !== " " && !map.has(ch)) {
      map.set(ch, String.fromCharCode(97 + j));
      j++;
    }
  }
  let res = [];
  for (let ch of message) {
    res.push(ch === " " ? " " : map.get(ch));
  }
  return res.join("");
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
); //Output: "this is a secret"

console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  ) //Output: "the five boxing wizards jump quickly"
);
