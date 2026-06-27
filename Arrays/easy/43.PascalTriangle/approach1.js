function nCr(R, C) {
  const n = R - 1;
  const k = Math.min(C - 1, n - (C - 1));

  let res = 1;

  for (let i = 0; i < k; i++) {
    res = (res * (n - i)) / (i + 1);
  }

  return res;
}
