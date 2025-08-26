var clearDigits = function (s) {
  let stack = [];

  //push characters only not digits
  for (let char of s) {
    if (char < "0" || char > "9") {
      stack.push(char);
    }
  }
  let result = "";
  while (stack.length > 0) {
    result = stack.pop() + result; //this is to maintain order
  }
  return result;
};

const result = clearDigits("abcd123");
console.log(result);
