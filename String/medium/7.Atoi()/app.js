function atoi(s) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let sign = 1;
  let res = 0;
  let i = 0;
  //leading spaces
  while (i < s.length && s[i] === " ") {
    i++;
  }
  //handle sign
  if (i < s.length && (s[i] === "-" || s[i] === "+")) {
    s[i] === "-" ? (sign = -1) : (sign = 1);
    i++;
  }
  //handle digits
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);
    res = res * 10 + digit;
    if (sign * res > INT_MAX) return INT_MAX;
    if (sign * res < INT_MIN) return INT_MIN;
    i++;
  }
  return sign * res;
}

console.log(atoi(" -12345"));
console.log(atoi("4193 with words"));
