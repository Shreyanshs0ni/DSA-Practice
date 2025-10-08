function divideFunction(dividend, divisor) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31;

  if (dividend === INT_MIN && divisor === -1) return INT_MAX;
  if (dividend === INT_MIN && divisor === 1) return INT_MIN;

  const isNegative = dividend < 0 !== divisor < 0;

  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let ans = 0;

  let i = 31;
  while (a >= b) {
    if (i < 0) break;
    if (a >>> i >= b) {
      ans += 1 << i;
      a -= b << i;
    }
    i--;
  }
  return isNegative ? -ans : ans;
}
console.log(divideFunction(12, 2));
