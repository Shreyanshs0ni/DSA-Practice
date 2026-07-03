function distinctK(s) {
  let set = new Set();
  for (let ch of s) {
    set.add(ch);
  }
  console.log(set);
  return set.size;
}
function countNumberOfSubstring(s, k) {
  res = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      sbtr = s.substring(i, j + 1);
      let length = distinctK(sbtr);
      if (length === k) {
        res++;
      }
    }
  }
  return res;
}

console.log(countNumberOfSubstring("pqpqs", 2));
console.log(countNumberOfSubstring("abcbaa", 3));
 