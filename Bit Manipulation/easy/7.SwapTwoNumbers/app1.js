function swap2numbers(a, b) {
  console.log("Befor : " + a, b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("After : " + a, b);
}

swap2numbers(10, 20);
