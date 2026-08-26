function shortestBeautifulSubstring(s, k) {
  let shortest = null;
  let left = 0;
  let ones = 0;
  for (let right = left; right < s.length; right++) {
    if (s[right] === "1") {
      ones++;
    }
    while (ones > k) {
      if (s[left] === "1") ones--;
      left++;
    }
    if (ones === k) {
      while (s[left] === "0") {
        left++;
      }
      const substr = s.substring(left, right + 1);
      if (!shortest || shortest.length > substr.length) {
        shortest = substr;
      } else if (shortest.length === substr.length) {
        if (substr < shortest) {
          shortest = substr;
        }
      }
    }
  }
  return shortest === null ? "" : shortest;
}

console.log(shortestBeautifulSubstring("100011001", 3)); //"11001"
console.log(shortestBeautifulSubstring("1011", 2)); //"11"
console.log(shortestBeautifulSubstring("000", 1)); //""
