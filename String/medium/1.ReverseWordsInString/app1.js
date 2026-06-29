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
    if (res.length > 0) res += " ";
    res += s.substring(i + 1, end + 1);
  }
  return res;
}

function reverseWords1(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords1("welcome to the jungle"));
console.log(reverseWords1("amazing coding skills"));
