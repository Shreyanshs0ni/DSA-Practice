function powerSet(s) {
  let n = s.length;
  let total = 1 << n;
  let subsequence = [];
  for (let mask = 0; mask < total; mask++) {
    const subseq = [];
    for (let i = 0; i < n; i++) {
      if ((mask & (i << 1)) !== 0) {
        subseq.push(s[i]);
      }
    }
    subsequence.push(subseq.join(""));
  }
  return subsequence;
}

console.log(powerSet("abc"));
