/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morse = new Map([
    ["a", ".-"],
    ["b", "-..."],
    ["c", "-.-."],
    ["d", "-.."],
    ["e", "."],
    ["f", "..-."],
    ["g", "--."],
    ["h", "...."],
    ["i", ".."],
    ["j", ".---"],
    ["k", "-.-"],
    ["l", ".-.."],
    ["m", "--"],
    ["n", "-."],
    ["o", "---"],
    ["p", ".--."],
    ["q", "--.-"],
    ["r", ".-."],
    ["s", "..."],
    ["t", "-"],
    ["u", "..-"],
    ["v", "...-"],
    ["w", ".--"],
    ["x", "-..-"],
    ["y", "-.--"],
    ["z", "--.."],
  ]);
  let res = new Set();
  for (let i = 0; i < words.length; i++) {
    let morseWord = "";
    for (let j = 0; j < words[i].length; j++) {
      morseWord += morse.get(words[i][j]);
    }
    res.add(morseWord);
  }
  return res.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
