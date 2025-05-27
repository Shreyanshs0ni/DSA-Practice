const once = (fn) => {
  let called = false;
  let result = 0;

  return (...args) => {
    if (!called) {
      ans = fn(...args);
      called = true;
      return ans;
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
