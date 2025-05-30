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

function findInLL(arr, val) {
  let current = linkedList;
  while (current) {
    if (current.value == val) {
      return 1;
    }
    current = current.next;
  }
  return 0;
}
const arr = [10, 20, 30, 40];
const linkedList = arrayToLinkedList(arr);
const val = 60;

console.log(findInLL(arr, val));
