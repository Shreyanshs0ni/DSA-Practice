function iso(s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      if (set.has(t[i])) {
        return false;
      }

      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }

  return true;
}

let s = "paper";
let t = "title";
let s1 = "foo";
let t1 = "bar";
console.log(iso(s, t));
console.log(iso(s1, t1));
