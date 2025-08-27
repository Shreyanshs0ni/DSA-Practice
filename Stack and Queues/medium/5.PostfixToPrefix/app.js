function postfixToPrefix(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (/[a-zA-Z0-9]/.test(c)) {
      stack.push(c);
    } else {
      t1 = stack.pop();
      t2 = stack.pop();

      stack.push(c + t2 + t1);
    }
  }
  return stack[0];
}
console.log(postfixToPrefix("AB+C*")); // *+ABC
