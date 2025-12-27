var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    const w = words[i];

    if (
      (charToWord.has(ch) && charToWord.get(ch) !== w) ||
      (wordToChar.has(w) && wordToChar.get(w) !== ch)
    ) {
      return false;
    }

    charToWord.set(ch, w);
    wordToChar.set(w, ch);
  }

  return true;
};
