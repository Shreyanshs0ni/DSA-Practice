class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function arrToLinkedList(arr) {
  if (arr.length == 0) return null;
  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i <= arr.length - 1; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

function deleteHead(linkedList) {
  if (linkedList === null) return null;
  return linkedList.next;
}
function printLinkedList(head) {
  let current = head;
  const result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Usage
const arr = [10, 20, 30, 40];
let linkedList = arrToLinkedList(arr);
console.log("Before deletion:");
printLinkedList(linkedList);

linkedList = deleteHead(linkedList);

console.log("After deleting head:");
printLinkedList(linkedList);
