function prefixToPostfix(s) {
  let st = [];

  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      st.push(c);
    } else {
      t1 = st.pop();
      t2 = st.pop();

      st.push(t1 + t2 + c);
    }
  }
  return st[0];
}

console.log(prefixToPostfix("*+ABC")); // AB+C*
