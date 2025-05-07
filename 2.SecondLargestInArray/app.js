function findSecondSmall(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let small = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    } else if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }
  }
  return secondSmall;
}

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let large = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}

const arr1 = [1, 2, 3, 4, 5, 7, 8, 9];
const small1 = findSecondSmall(arr1);
const large1 = findSecondLargest(arr1);
console.log(
  "The second smallest number in array is",
  small1,
  "The Second Largest Number in array is ",
  large1
);

const arr2 = [3, 56, 67, 34, 7, 1, 45];
const small2 = findSecondSmall(arr2);
const large2 = findSecondLargest(arr2);
console.log(
  "The second smallest number in array is",
  small2,
  "The Second Largest Number in array is ",
  large2
);
