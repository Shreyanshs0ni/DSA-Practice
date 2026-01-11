/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let j = 0;
  let map = new Map();
  for (let i = 0; i < key.length; i++) {
    if (key[i] === " " || map.has(key[i])) {
      continue;
    } else {
      map.set(key[i], chars[j]);
      j++;
    }
  }
  let res = "";
  for (let ch of message) {
    if (ch === " ") {
      res += " ";
    } else {
      res += map.get(ch);
    }
  }
  return res;
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
