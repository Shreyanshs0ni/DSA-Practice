var checkRecord = function (s) {
  let aCount = 0,
    lStreak = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "A") {
      aCount++;
      if (aCount >= 2) return false;
    }

    if (c === "L") {
      lStreak++;
      if (lStreak >= 3) return false;
    } else {
      lStreak = 0;
    }
  }
  return true;
};
