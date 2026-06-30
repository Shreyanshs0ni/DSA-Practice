function sumOfBeautyOfAllSubstring(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let freq = new Array(26).fill(0);
    for (let j = i; j < s.length; j++) {
      freq[s[j].charCodeAt(0) - 97]++;
      let max = 0;
      let min = Infinity;
      for (let count of freq) {
        if (count > 0) {
          max = Math.max(count, max);
          min = Math.min(count, min);
        }
      }
      total += max - min;
    }
  }
  return total;
}

console.log(sumOfBeautyOfAllSubstring("aabcbaa"));
console.log(sumOfBeautyOfAllSubstring("xyx"));
