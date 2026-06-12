function rotateString(s, t) {
  let prefix = "";
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    let word = s.substring(i + 1, s.length);
    prefix += s[i];
    word += prefix;
    if (word === t) return true;
  }
  return false;
}

let s = "rotation";
let goal = "tionrota";
console.log(rotateString(s, goal));

let s1 = "hello";
let goal1 = "lohelx";
console.log(rotateString(s1, goal1));
