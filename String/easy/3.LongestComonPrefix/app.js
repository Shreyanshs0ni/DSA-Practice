function findLongestCommonPrefix(strs) {
  let result = "";
  strs.sort();

  let first = strs[0];
  let last = strs[strs.length - 1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] != last[i]) break;
    result += first[i];
  }
  return result;
}

const string = ["flower", "flour", "floor", "floss"];
console.log(findLongestCommonPrefix(string));
