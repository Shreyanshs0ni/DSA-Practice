class Node {
  constructor(value, next = null, back = null) {
    this.value = value;
    this.next = next;
    this.back = back;
  }
}
const ArrToDoublyLL = (arr) => {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = prev.next;
  }
  return head;
};

function printDoublyLL(head) {
  let forward = [];
  let current = head;
  let tail = null;

  // Traverse forward and store values
  while (current) {
    forward.push(current.value);
    if (current.next === null) tail = current; // save last node
    current = current.next;
  }

  // Traverse backward from tail
  let backward = [];
  current = tail;
  while (current) {
    backward.push(current.value);
    current = current.back;
  }

  console.log("Forward: ", forward.join(" <-> "));
  console.log("Backward:", backward.join(" <-> "));
}

const arr = [10, 20, 30, 40];
const head = ArrToDoublyLL(arr);
printDoublyLL(head);
