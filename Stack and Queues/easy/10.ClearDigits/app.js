var clearDigits = function (s) {
  let stack = [];

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log(clearDigits("abc"));      // "abc"
console.log(clearDigits("cb34"));     // ""
console.log(clearDigits("abcd123"));  // "a"