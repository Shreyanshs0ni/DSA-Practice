function shortestBeautifulSubstring(s, k) {
  let shortest = null;
  for (let i = 0; i < s.length; i++) {
    let ones = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === "1") {
        ones++;
      }
      if (ones === k) {
        const substr = s.substring(i, j + 1);
        if (!shortest || shortest.length > substr.length) {
          shortest = substr;
        } else if (shortest.length === substr.length) {
          if (substr < shortest) {
            shortest = substr;
          }
        }
      }
      if (ones > k) break;
    }
  }

  return shortest === null ? "" : shortest;
}

console.log(shortestBeautifulSubstring("100011001", 3)); //"11001"
console.log(shortestBeautifulSubstring("1011", 2)); //"11"
console.log(shortestBeautifulSubstring("000", 1)); //"""
