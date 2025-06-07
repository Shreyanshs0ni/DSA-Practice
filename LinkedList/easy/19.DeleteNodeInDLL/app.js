class Node {
  constructor(value = 0, next = null, back = null) {
    this.value = value;
    this.next = next;
    this.back = back;
  }
}

const arrToDLL = (arr) => {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
};

const printDLL = (head) => {
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
};

const deleteNodeByValue = (head, target) => {
  if (!head) return null; // if there's no head
  // if target is head
  if (head.value === target) {
    let newHead = nead.next;
    if (newHead) newHead.back = null;
    return newHead;
  }
  let current = head;
  while (current && current.value !== target) {
    current = current.next;
  }
  if (!current) return head; //no target found
  if (current.back) current.back.next = current.next;
  if (current.next) current.next.back = current.back;
  return head;
};

// Test
const arr = [10, 20, 30, 40, 50, 60, 70];
let dll = arrToDLL(arr);

console.log("Before deletion:");
printDLL(dll);

dll = deleteNodeByValue(dll, 40); // delete node with value 40

console.log("After deletion:");
printDLL(dll);
