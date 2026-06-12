function iso(s, t) {
  if (s.length !== t.length) return false;
  let m1 = Array(256).fill(0),
    m2 = Array(256).fill(0);

  for (let i = 0; i < s.length; ++i) {
    if (m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]) return false;

    m1[s.charCodeAt(i)] = i + 1;
    m2[t.charCodeAt(i)] = i + 1;
  }
  return true;
}

let s = "paper";
let t = "title";
let s1 = "foo";
let t1 = "bar";
console.log(iso(s, t));
console.log(iso(s1, t1));
