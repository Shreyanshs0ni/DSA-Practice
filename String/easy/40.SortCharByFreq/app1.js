function sortCharByFreq(s) {
  let freq = new Array(26)
    .fill(0)
    .map((_, i) => [0, String.fromCharCode(i + 97)]);

  for (let ch of s) {
    freq[ch.charCodeAt(0) - 97][0]++;
  }

  freq.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    return a[1].localeCompare(b[1]);
  });

  let result = [];
  for (let [count, char] of freq) {
    if (count > 0) result.push(char);
  }
  return result;
}

console.log(sortCharByFreq("tree"));
console.log(sortCharByFreq("raaaajj"));
