function reverseWords(s) {
  let res = "";
  let i = s.length - 1;
  while (i >= 0) {
    while (i >= 0 && s[i] === " ") {
      i--;
    }
    if (i < 0) break;
    let end = i;
    while (i >= 0 && s[i] !== " ") {
      i--;
    }
    let word = s.substring(i + 1, end + 1);

    if (res.length > 0) {
      res += " ";
    }
    res += word;
  }
  return res;
}

let s = "welcome to the jungle";
console.log(reverseWords(s));
