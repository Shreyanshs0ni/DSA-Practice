function solve(s, t, i, j) {
  if (j === t.length) {
    return 1;
  }
  if (i === s.length) {
    return 0;
  }
  if (s[i] === t[j]) {
    return solve(s, t, i + 1, j + 1) + solve(s, t, i + 1, j);
  } else {
    return solve(s, t, i + 1, j);
  }
}

var numDistinct = function (s, t) {
  return solve(s, t, 0, 0);
};

console.log(numDistinct("rabbbit", "rabbit"));
console.log(numDistinct("babgbag", "bag"));
