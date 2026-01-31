/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let stack = [];
  let num = [];
  for (let i = 1; i <= pattern.length + 1; i++) {
    stack.push(i);
    if (i === pattern.length + 1 || pattern[i - 1] === "I") {
      while (stack.length) {
        num.push(stack.pop());
      }
    }
  }
  return num.join("");
};

console.log(smallestNumber("IIIDIDDD")); //"123549876"
console.log(smallestNumber("DDD")); //"4321"
