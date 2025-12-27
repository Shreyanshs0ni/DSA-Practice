var toHex = function (num) {
  if (num === 0) return "0";
  if (num < 0) num >>>= 0;

  const hex = "0123456789abcdef";
  let res = "";

  while (num > 0) {
    res = hex[num % 16] + res;
    num = Math.floor(num / 16);
  }
  return res;
};
console.log(toHex(-1));
