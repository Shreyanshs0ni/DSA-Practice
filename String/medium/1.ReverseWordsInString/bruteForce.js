function reverseWords(s) {
  let words = [];
  let word = "";

  for (let char of s) {
    if (char != " ") {
      word += char;
    } else if (word.length > 0) {
      words.push(word);
      word = "";
    }
  }
  if (word.length > 0) {
    words.push(word);
  }
  words.reverse();

  return words.join(" ");
}

let s = "welcome to the jungle";
console.log(reverseWords(s));
