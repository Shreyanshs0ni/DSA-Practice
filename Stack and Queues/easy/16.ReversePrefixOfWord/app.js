/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let stack = [];
  let res = [];
  let i = 0;
  for ( i = 0; i < word.length; i++) {
    stack.push(word[i]);
    if (word[i] === ch) {
      while (stack.length > 0) {
        res.push(stack.pop());
      }
      i++;
      break;
    }
  }
  if (res.length === 0) return word;

  for (; i < word.length; i++) {
    res.push(word[i]);
  }
  return res.join("");
};

console.log(reversePrefix("abcdefd", "d"));
