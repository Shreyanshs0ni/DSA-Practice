function divideFunction(dividend, divisor) {
  if (dividend === 0) return 0;

  let sign =
    (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ? -1 : 1;

  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);

  let quotient = 0;
  while (dvd >= dvs) {
    let temp = dvs;
    let multiple = 1;
    while (temp << 1 <= dvd) {
      temp <<= 1;
      multiple <<= 1;
    }
    dvd -= temp;
    quotient += multiple;
  }

  return sign * quotient;
}
console.log(divideFunction(12, 2));
console.log(divideFunction(10, 3));
console.log(divideFunction(7, -3));
