function findMissingNumber(arr) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    xor1 = xor1 ^ (i + 1);
    xor2 = xor2 ^ arr[i];
  }
  xor1 = xor1 ^ arr.length;  
  finalXor = xor1 ^ xor2;
  return finalXor;
}

const arr1 = [1, 3, 4, 5];
console.log(findMissingNumber(arr1));

//XOR METHOD
