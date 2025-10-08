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
  let output = "";
  while (head !== null) {
    output += head.value + "->";
    head = head.next;
  }
  console.log(output);
}

function insertAtTail(head, target) {
  let targetNode = new Node(target);
  if (head === null) return targetNode;
  let temp = head;

  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = targetNode;
  return head;
}

const arr = [1, 2, 3, 4, 5, 6];
let LL = arrToLL(arr);
printLL(LL); // 1->2->3->4->5->6->null

const target = 7;
LL = insertAtTail(LL, target);
printLL(LL); // 1->2->3->4->5->6->7->null
