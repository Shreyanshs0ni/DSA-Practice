function rotateString(s, goal) {
  if (s.length !== goal.length) return false;
  let doubleS = s + s;
  let start = 0;
  let end = goal.length - 1;
  while (end <= doubleS.length) {
    let word = doubleS.substring(start, end + 1);
    console.log(word);
    if (word === goal) return true;
    start++;
    end++;
  }
  return false;
}

let s = "rotation";
let goal = "tionrota";
console.log(rotateString(s, goal));

let s1 = "hello";
let goal1 = "lohelx";
console.log(rotateString(s1, goal1));
