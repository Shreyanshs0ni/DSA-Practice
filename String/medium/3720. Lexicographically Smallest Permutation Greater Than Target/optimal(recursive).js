let result = "";

function solve(current, count, target, index, greater) {
  if (index === target.length) {
    if (greater) {
      result = current.join("");
      return true;
    }
    return false;
  }

  for (let i = 0; i < 26; i++) {
    if (count[i] === 0) continue;
    let char = String.fromCharCode(97 + i);
    if (!greater && char < target[index]) continue;

    current.push(char);
    count[char.charCodeAt(0) - "a".charCodeAt(0)]--;

    let isGreater = greater || char > target[index];

    if (solve(current, count, target, index + 1, isGreater)) {
      return true;
    }

    current.pop();
    count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return false;
}

var lexGreaterPermutation = function (s, target) {
  result = "";
  let count = new Array(26).fill(0);
  for (let char of s) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let current = [];
  solve(current, count, target, 0, false);
  return result;
};

console.log(lexGreaterPermutation("abc", "bba")); //bca
console.log(lexGreaterPermutation("leet", "code")); //eelt
