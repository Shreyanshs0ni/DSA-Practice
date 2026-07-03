function countNumberOfSubstring(s, k) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let freq = new Set();
    let distinct = 0;
    for (let j = i; j < s.length; j++) {
      if (!freq.has(s[j])) {
        distinct++;
      }
      freq.add(s[j]);
      if (distinct > k) break;
      if (distinct === k) {
        ans++;
      }
    }
  }
  return ans;
}

console.log(countNumberOfSubstring("pqpqs", 2));
console.log(countNumberOfSubstring("abcbaa", 3));
