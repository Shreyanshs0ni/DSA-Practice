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
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
}

function printDLL(head) {
  let forward = "";
  let backward = "";
  let current = head;
  let tail = null;
  while (current) {
    forward += current.value + "<->";
    if (current.next === null) tail = current;
    current = current.next;
  }
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

function reverseDLL(head) {
  if (!head) return null;
  if (!head.next) return head;
  let temp = null;
  let current = head;
  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }
  if (temp !== null) {
    head = temp.prev;
  }

  return head;
}
let arr = [10, 20, 30, 40];
let dll = arrToDLL(arr);
console.log("Original DLL:");
printDLL(dll);

dll = reverseDLL(dll);
printDLL(dll);
