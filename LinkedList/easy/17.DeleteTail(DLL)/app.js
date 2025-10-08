class Node {
  constructor(value = 0, next = null, back = null) {
    this.value = value;
    this.next = next;
    this.back = back;
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
  let forward = [];
  let current = head;
  let tail = null;
  while (current) {
    forward.push(current.value);
    if (current.next === null) tail = current;
    current = current.next;
  }
  let backward = [];
  current = tail;
  while (current) {
    backward.push(current.value);
    current = current.back;
  }
  console.log(forward.join("<->"));
  console.log(backward.join("<->"));
}
function deleteTail(head) {
  if (!head) return null;
  if (!head.next) return null;

  let temp = head;
  while (temp.next.next !== null) {
    temp = temp.next;
  }

  temp.next = null;
  return head;
}
// Test it
const arr = [10, 20, 30, 40];
let head = arrToDLL(arr);

console.log("Before deleting tail:");
printDLL(head);

head = deleteTail(head); // removes 40

console.log("After deleting tail:");
printDLL(head);
