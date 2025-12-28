/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let allUpper = word === word.toUpperCase();
  let allLower = word === word.toLowerCase();
  let titleCase =
    word[0] === word[0].toUpperCase() &&
    word.slice(1) === word.slice(1).toLowerCase;
  return allLower || allUpper || titleCase;
};

console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("USA"));
