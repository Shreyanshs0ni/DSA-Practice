class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
const arrToLL = (arr) => {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
};
const detectLoop = (head) => {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = arrToLL([1, 2, 3, 4, 5]);

// Introduce a loop: 5 -> 3
let temp = head;
while (temp.next !== null) {
  temp = temp.next;
} 
temp.next = head.next.next; // Node with value 3

console.log(detectLoop(head)); // true

const noLoopHead = arrToLL([1, 2, 3, 4, 5]);
console.log(detectLoop(noLoopHead)); // false
