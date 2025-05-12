function findOnceOccuringNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

const arr1 = [1, 1, 2, 2, 3, 4, 4, 5, 5];
console.log(findOnceOccuringNumber(arr1));
