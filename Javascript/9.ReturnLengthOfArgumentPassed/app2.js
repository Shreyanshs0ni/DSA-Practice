var argumentsLength = function (...args) {
  let count = 0;
  for (let i = args.length - 1; i >= 0; i--) {
    count++;
  }
  return count;
};

console.log(argumentsLength(1, 2, 3, 4, 5, 6)); // 6
