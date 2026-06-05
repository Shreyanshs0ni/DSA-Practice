function findOnceOccuringNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  return xor;
}

let a = [4, 1, 2, 1, 2];
let b = [2, 2, 1];
console.log(findOnceOccuringNumber(a));
console.log(findOnceOccuringNumber(b));
