/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let rowMap = new Map();
  for (let c of "qwertyuiop") rowMap.set(c, 1);
  for (let c of "asdfghjkl") rowMap.set(c, 2);
  for (let c of "zxcvbnm") rowMap.set(c, 3);

  let result = [];
  for (let word of words) {
    const lower = word.toLowerCase();
    const row = rowMap.get(lower[0]);
    let isValid = true;

    for (let ch of lower) {
      if (rowMap.get(ch) !== row) {
        isValid = false;
        break;
      }
    }
    if (isValid) result.push(word);
  }

  return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
