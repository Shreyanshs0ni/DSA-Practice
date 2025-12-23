/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (words.length !== pattern.length) {
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
      // Check if the word is already a value in the map
      // Note: Map.values() check can be slow. Using a second map is faster.
      // But for a short pattern string, this is fine.
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
