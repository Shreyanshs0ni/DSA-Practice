function findIntersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      ans.push(arr1[i]);
      i++;
      j++;
    }
  }
  return ans;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 3, 4, 5];
const result = findIntersection(arr1, arr2);
console.log(result);
