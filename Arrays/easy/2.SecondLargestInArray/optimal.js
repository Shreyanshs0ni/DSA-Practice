function findSecondLargestandSmallest(arr) {
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  let smallest = Number.MAX_SAFE_INTEGER;
  let secondSmallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  console.log("Second Largest:" + secondLargest);
  console.log("Second Smallest:" + secondSmallest);
}

let a = [1, 2, 4, 5, 6, 7, 7];
findSecondLargestandSmallest(a);
