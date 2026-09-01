class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function arrToLL(arr) {
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    current.next = newNode;
    current = current.next;
  }
  return head;
}

function printLL(head) {
  let ans = "";
  let current = head;
  while (current) {
    ans += current.value + "->";
    current = current.next;
  }
  console.log(ans);
}

function nodesBetweenCriticalPoints(head) {
  let prev = head;
  let current = head.next;
  let firstCriticalPoint = null;
  let lastCriticalPoint = null;
  let prevCriticalPoint = null;
  let minDistance = Infinity;
  let index = 1;
  while (current.next) {
    if (
      (current.value > prev.value && current.value > current.next.value) ||
      (current.value < prev.value && current.value < current.next.value)
    ) {
      if (firstCriticalPoint === null) {
        firstCriticalPoint = index;
        prevCriticalPoint = index;
      } else {
        minDistance = Math.min(minDistance, index - prevCriticalPoint);
        prevCriticalPoint = index;
      }

      lastCriticalPoint = index;
    }
    prev = current;
    current = current.next;
    index++;
  }
  if (firstCriticalPoint === lastCriticalPoint || minDistance === Infinity)
    return [-1, -1];
  else return [minDistance, lastCriticalPoint - firstCriticalPoint];
}

let arr1 = [5, 3, 1, 2, 5, 1, 2];
let head1 = arrToLL(arr1);
console.log(nodesBetweenCriticalPoints(head1));

let arr2 = [1, 3, 2, 2, 3, 2, 2, 2, 7];
let head2 = arrToLL(arr2);
console.log(nodesBetweenCriticalPoints(head2));
