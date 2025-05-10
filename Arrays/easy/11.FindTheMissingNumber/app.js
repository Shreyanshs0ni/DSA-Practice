function findMissingNumber(arr) {
  let sum = (arr[arr.length - 1] * (arr[arr.length - 1] + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }
  const result = sum - actualSum;
  return result;
}

const arr1 = [1, 2, 3, 5];
console.log(findMissingNumber(arr1));

//SUM METHOD