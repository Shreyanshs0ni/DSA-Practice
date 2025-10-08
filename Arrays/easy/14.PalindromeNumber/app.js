const findPalindrom = (x) => {
  if (x < 0) return false;

  let reverse = 0;
  const xcopy = x;

  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return xcopy === reverse;
};

const x1 = 12;

console.log(findPalindrom(x1));
