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
  current = tail;
  let backward = [];
  while (current) {
    backward.push(current.value);
    current = current.back;
  }
  console.log(forward.join("<->"));
  console.log(backward.join("<->"));
};
const insertAtTail = (head, target) => {
  const newNode = new Node(target);
  if (!head) return newNode;
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  newNode.back = current;
  return head;
};

let arr = [20, 30, 40, 50, 60, 70];
let dll = arrToDLL(arr);
printDLL(dll);
dll = insertAtTail(dll, 80);
printDLL(dll);
