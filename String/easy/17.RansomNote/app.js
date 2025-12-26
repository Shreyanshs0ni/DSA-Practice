/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  if (!ransomNote) return true;
  else return false;
};

console.log(canConstruct("aa", "ab"));
