/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let lastOccurance = new Array(26).fill(-1);
  let isTaken = new Array(26).fill(false);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    lastOccurance[s.charCodeAt(i) - 97] = i;
  }
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const idx = ch.charCodeAt(0) - 97;

    if (isTaken[idx]) continue;

    while (
      stack.length &&
      stack[stack.length - 1] > ch &&
      lastOccurance[stack[stack.length - 1].charCodeAt(0) - 97] > i
    ) {
      isTaken[stack.pop().charCodeAt(0) - 97] = false;
    }
    stack.push(ch);
    isTaken[idx] = true;
  }

  return stack.join("");
};

console.log(removeDuplicateLetters("cbacdcbc"));
