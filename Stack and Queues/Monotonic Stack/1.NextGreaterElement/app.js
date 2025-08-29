const nge = (num1, num2) => {
  let stack = [];
  const map = new Map();

  for (let i = 0; i < num2.length; i++) {
    while (stack.length && stack[stack.length - 1] < num2[i]) {
      map.set(stack.pop(), num2[i]);
    }
    stack.push(num2[i]);
  }
  while (stack.length) {
    map.set(stack.pop(), -1);
  }

  return num1.map((num) => map.get(num));
};

console.log(nge([4, 1, 2], [1, 3, 4, 2]));
