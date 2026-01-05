var reverseDegree = function (s) {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const reversePos = 123 - s.charCodeAt(i);
    res += reversePos * (i + 1);
  }

  return res;
};
