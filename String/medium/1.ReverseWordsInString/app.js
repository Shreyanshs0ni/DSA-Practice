function reverseWords(s) {
  let result = "";
  let i = s.length - 1;
  while (i >= 0) {
    //skip trailing space
    while (i >= 0 && s[i] == " ") i -= 1;
    if (i < 0) break;
    let j = i;
    //move to the beginnig of the word;
    while (i >= 0 && s[i] !== " ") i -= 1;
    //extract word
    let word = s.substring(i + 1, j + 1);
    //append word to result;
    if (result == "") {
      result = word;
    } else {
      result = result + " " + word;
    }
  }
  return result;
}

const s1 = "tatti khale sanjay";
console.log(reverseWords(s1));
