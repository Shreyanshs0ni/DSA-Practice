function findMaximumConsecutive(arr) {
  let maximum = 0;
  let count = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > 0) {
      count++;
      i++;
    } else if (arr[i] <= 0) {
      maximum = count;
      count = 0;
      i++;
    } else {
      i++;
    }
  }
  return maximum;
}

const arr1 = [1, 1, 0, 1, 1, 1, 1, 1,  0, 1, 1];
console.log(findMaximumConsecutive(arr1));
