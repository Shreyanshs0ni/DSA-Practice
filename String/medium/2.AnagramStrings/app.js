function checkAnagrams(s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
}

const s1 = "listen";
const t1 = "silent";

console.log(checkAnagrams(s1, t1));
