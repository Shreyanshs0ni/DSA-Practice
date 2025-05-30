//define a node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//conver array to linkedList

function arrayToLinkedList(arr) {
  if (arr.length == 0) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i <= arr.length - 1; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

const arr = [10, 20, 30, 40];
const linkedList = arrayToLinkedList(arr);

// Print linked list
let current = linkedList;
let count = 0;
while (current) {
  count++;
  current = current.next;
}
console.log("Length:" + count);
