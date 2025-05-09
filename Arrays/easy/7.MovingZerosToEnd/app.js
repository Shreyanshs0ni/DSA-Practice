function moveZerosToEnd(arr) {
  var insertPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }
  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }
  return arr;
}

const arr1 = [1, 2, 0, 2, 2, 3, 0, 0, 0, 5, 2, 1];
const result = moveZerosToEnd(arr1);
console.log(result);
