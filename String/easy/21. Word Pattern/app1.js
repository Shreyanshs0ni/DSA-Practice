/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  const map = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (map.has(char)) {
      if (map.get(char) !== word) {
        return false;
      }
    } else {
      let isValueMapped = false;
      for (let val of map.values()) {
        if (val === word) {
          isValueMapped = true;
          break;
        }
      }
      if (isValueMapped) {
        return false;
      }
      map.set(char, word);
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
