function printName(i, n) {
  {
    if (i > n) {
      return;
    }
    console.log("Shreyansh");
    printName(i + 1, n);
  }
}

printName(1, 10);
