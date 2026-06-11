function largestOdd(s) {
  let end = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if ((s[i] - "0") % 2 !== 0) {
      end = i;
      break;
    }
  }
  if (end === -1) return "";

  let start = 0;
  while (start <= end && s[start] === "0") {
    start++;
  }
  return s.substring(start, end + 1);
}

let s = "0214638";
console.log(largestOdd(s));
