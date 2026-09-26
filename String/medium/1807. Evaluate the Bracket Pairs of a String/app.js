/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */

function makeMap(knowledge) {
  let map = new Map();
  for (let i = 0; i < knowledge.length; i++) {
    map.set(knowledge[i][0], knowledge[i][1]);
  }
  return map;
}
var evaluate = function (s, knowledge) {
  let ans = "";
  let mp = makeMap(knowledge);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      i++;
      let word = "";
      while (s[i] !== ")") {
        word += s[i];
        i++;
      }
      if (mp.has(word)) {
        ans += mp.get(word);
      } else {
        ans += "?";
      }
    } else {
      ans += s[i];
    }
  }
  return ans;
};

console.log(
  evaluate("(name)is(age)yearsold", [
    ["name", "bob"],
    ["age", "two"],
  ]),
);

console.log(evaluate("hi(name)", [["a", "b"]]));
console.log(evaluate("(a)(a)(a)aaa", [["a", "yes"]]));
