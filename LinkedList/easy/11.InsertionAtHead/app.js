class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

function arrToLL(arr) {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

function printLL(head) {
  let result = "";
  while (head !== null) {
    result += head.value + "->";
    head = head.next;
  }
  console.log(result);
}

function insertAtHead(head, target) {
  let temp = new Node(target);
  temp.next = head;
  return temp;
}

const arr = [1, 2, 3, 4, 5, 6];
const LL = arrToLL(arr);
printLL(LL);
const target = 5;
const updLL = insertAtHead(LL, target);
printLL(updLL);
