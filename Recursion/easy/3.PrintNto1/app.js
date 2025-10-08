function printNto1(i, n) {
  if (i < 1) {
    return;
  }
  console.log(i);
  printNto1(i - 1, n);
}

printNto1(10, 10);
