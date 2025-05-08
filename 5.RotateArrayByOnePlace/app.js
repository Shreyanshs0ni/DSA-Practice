function leftRotateByOne(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (i < arr.length) {
      arr[i - 1] = arr[i];
    }
  }
  arr[arr.length - 1] = temp;
  return arr;
}

const arr1 = [1, 2, 3, 4, 5];
let result = leftRotateByOne(arr1);
console.log(result);
