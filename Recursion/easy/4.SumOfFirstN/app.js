function sumTillN(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  sumTillN(i - 1, sum + i);
}

sumTillN(3, 0);
