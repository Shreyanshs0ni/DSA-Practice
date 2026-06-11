function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

let s = "welcome to the jungle";
console.log(reverseWords(s));
