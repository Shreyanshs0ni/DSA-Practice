const lengthOfLastWord = (s) => {
  let i = s.length - 1; // use i for index
  let ans = 0;

  // Step 1: skip trailing spaces
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Step 2: count last word length
  while (i >= 0 && s[i] !== " ") {
    ans++;
    i--;
  }

  return ans;
};

console.log(lengthOfLastWord("Shreyansh Soni")); // 4
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   ")); // 2
