function longestPrefix(s) {
  let res = "";
  s.sort();
  let first = 0;
  let last = s.length - 1;
  for (let i = 0; i < Math.min(s[first].length, s[last].length); i++) {
    if (s[first][i] === s[last][i]) {
      res += s[first][i];
    } else {
      break;
    }
  }
  return res;
}

let str = ["flower", "flow", "flight"];
let str2 = ["apple", "banana", "grape", "mango"];
console.log(longestPrefix(str));
console.log(longestPrefix(str2));
