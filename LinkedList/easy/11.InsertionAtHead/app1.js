class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
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
  let res = "";
  while (head !== null) {
    res += head.value + "->";
    head = head.next;
  }
  res += "null";
  console.log(res);
}

function insertAtHead(head, value) {
  //   const newHead = new Node(value);
  //   newHead.next = head;
  //   return newHead;
  return new Node(value, head);
}

let a = [1, 2, 3, 4, 5];
let head = arrToLL(a);
printLL(head);
let head2 = insertAtHead(head, 0);
printLL(head2);
