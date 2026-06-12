function rotateString(s, goal) {
  if (s.length !== goal.length) return false;
  let doubleS = s + s;
  return doubleS.includes(goal);
}

let s = "rotation";
let goal = "tionrota";
console.log(rotateString(s, goal));

let s1 = "hello";
let goal1 = "lohelx";
console.log(rotateString(s1, goal1));
