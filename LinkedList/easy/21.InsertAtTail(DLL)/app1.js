class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

function arrToDLL(arr) {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    const temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
}
function printDLL(head) {
  let forward = "";

  let current = head;
  let tail = null;
  while (current) {
    forward += current.value + "<->";
    if (current.next === null) tail = current;
    current = current.next;
  }
  let backward = "";
  current = tail;
  while (current) {
    backward += current.value + "<->";
    current = current.prev;
  }
  forward += "null";
  backward += "null";
  console.log(forward);
  console.log(backward);
}

function insertAtTail(head, val) {
  let newNode = new Node(val);
  if (!head) return newNode;
  let current = head;

  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  newNode.prev = current;
  return head;
}
let arr = [20, 30, 40, 50, 60, 70];
let dll = arrToDLL(arr);
printDLL(dll);
dll = insertAtTail(dll, 80);
printDLL(dll);
