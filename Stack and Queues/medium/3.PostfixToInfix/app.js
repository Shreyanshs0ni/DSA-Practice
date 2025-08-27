 
const PostfixToInfix = (s) => {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (/[a-zA-Z0-9]/.test(c)) {
      st.push(c);
    } else {
      let t1 = st.pop();
      let t2 = st.pop();
      st.push("(" + t2 + c + t1 + ")");
    }
  }
  return st[0];
};

console.log(PostfixToInfix("AB+C*")); // ((A+B)*C)
