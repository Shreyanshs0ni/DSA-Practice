function swap2numbers(a, b) {
  console.log("before swap: " + a, b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("after swap: " + a, b);
}

swap2numbers(10, 20);
