//define a node class

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
//conver array to linkedList

function arrayToLinkedList(arr) {
  if (arr.length == 0) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

function findInLL(head, val) {
  while (head !== null) {
    if (head.value === val) {
      return true;
    }
    head = head.next;
  }
  return false;
}

const arr = [10, 20, 30, 40];
const head = arrayToLinkedList(arr);

console.log(findInLL(head, 60));
console.log(findInLL(head, 40));
