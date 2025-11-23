/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];
  let total = 0;

  for (let char of operations) {
    if (!isNaN(char)) {
      stack.push(parseInt(char));
    } else if (char === "+") {
      let a = stack[stack.length - 1];
      let b = stack[stack.length - 2];
      stack.push(a + b);
    } else if (char === "D") {
      stack.push(2 * stack[stack.length - 1]);
    } else if (char === "C") {
      stack.pop();
    } else {
      continue;
    }
  }
  for (let num of stack) {
    total += num;
  }
  return total;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];
  let total = 0;

  for (let char of operations) {
    if (!isNaN(char)) {
      stack.push(parseInt(char));
    } else if (char === "+") {
      let a = stack[stack.length - 1];
      let b = stack[stack.length - 2];
      stack.push(a + b);
    } else if (char === "D") {
      stack.push(2 * stack[stack.length - 1]);
    } else if (char === "C") {
      stack.pop();
    } else {
      continue;
    }
  }
  for (let num of stack) {
    total += num;
  }
  return total;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
