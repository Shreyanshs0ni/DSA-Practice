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

function criticalPoints(head) {
  let criticalPoint = [];
  let current = head.next;
  let prev = head;
  let index = 0;
  while (current.next) {
    if (current.value < prev.value && current.value < current.next.value) {
      criticalPoint.push(index + 1);
    }
    if (current.value > prev.value && current.value > current.next.value) {
      criticalPoint.push(index + 1);
    }
    prev = current;
    current = current.next;
    index++;
  }
  return criticalPoint;
}
function nodesBetweenCriticalPoints(head) {
  let nums = criticalPoints(head);
  if (nums.length < 2) return [-1, -1];
  let minDistance = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    minDistance = Math.min(minDistance, nums[i + 1] - nums[i]);
  }
  return [minDistance, nums[nums.length - 1] - nums[0]];
}

let arr1 = [5, 3, 1, 2, 5, 1, 2];
let head1 = arrToLL(arr1);
console.log(nodesBetweenCriticalPoints(head1));

let arr2 = [1, 3, 2, 2, 3, 2, 2, 2, 7];
let head2 = arrToLL(arr2);
console.log(nodesBetweenCriticalPoints(head2));
