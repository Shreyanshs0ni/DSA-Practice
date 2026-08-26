function shortestBeautifulSubstring(s, k) {
  let shortestBeautifulString = null;
  for (let i = 0; i < s.length; i++) {
    let numOfOnes = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === "1") {
        numOfOnes++;
      }
      if (numOfOnes === k) {
        const substr = s.substring(i, j + 1);
        if (
          !shortestBeautifulString ||
          shortestBeautifulString.length > substr.length
        ) {
          shortestBeautifulString = substr;
        } else if (shortestBeautifulString.length === substr.length) {
          if (substr < shortestBeautifulString) {
            shortestBeautifulString = substr;
          }
        }
      }
      if (numOfOnes > k) break;
    }
  }

  return shortestBeautifulString === null ? "" : shortestBeautifulString;
}

console.log(shortestBeautifulSubstring("100011001", 3)); //"11001"
console.log(shortestBeautifulSubstring("1011", 2)); //"11"
console.log(shortestBeautifulSubstring("000", 1)); //"""
