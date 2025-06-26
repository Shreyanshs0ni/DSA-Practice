function f(i) {
  if (i == 0) {
    return 0;
  }
  return i + f(i - 1);
}
const res = f(3);
console.log(res);
