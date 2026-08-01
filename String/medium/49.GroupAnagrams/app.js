function groupAnagrams(strs) {
  let sortedMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    sortedString = strs[i].split("").sort().join("");
    if (sortedMap.has(sortedString)) {
      sortedMap.get(sortedString).push(strs[i]);
    } else {
      sortedMap.set(sortedString, [strs[i]]);
    }
  }
  let res = [];
  for (let x of sortedMap.values()) {
    res.push(x);
  }
  return res;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
