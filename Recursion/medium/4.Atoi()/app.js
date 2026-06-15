const INT_MIN = -2147483648;
const INT_MAX = 2147483648;

function helper(s, i, num, sign) {
  if (i >= s.length || isNaN(Number(s[i]))) return sign * num;

  num = num * 10 + Number(s[i]);

  if (sign * num <= INT_MIN) return INT_MIN;
  if (sign * num >= INT_MAX) return INT_MAX;

  return helper(s, i + 1, num, sign);
}

function atoi(s) {
  let i = 0;

  while (i < s.length && s[i] === " ") i++;

  let sign = 1;
  if (i < s.length && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }
  return helper(s, i, 0, sign);
}

let a = " -12345";
let b = "4193 with words";

console.log(atoi(a));
console.log(atoi(b));
