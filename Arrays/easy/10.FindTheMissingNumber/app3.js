function findMissingNumber(arr) {
  let n = arr.length + 1;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let expSum = (n * (n + 1)) / 2;
  return expSum - sum;
}

let a = [1, 2, 3, 5];
console.log(findMissingNumber(a));
