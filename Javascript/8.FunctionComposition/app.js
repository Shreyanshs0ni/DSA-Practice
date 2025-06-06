var compose = (functions) => {
  return (x) => {
    if (functions.length == 0) return x;
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => 4 * x]);
console.log(fn(4));
