function oneToN(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  oneToN(i + 1, n);
}

oneToN(1, 10);
