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
const insertBeforeNode = (head, target, value) => {
  const newNode = new Node(target);
  if (!head) return newNode; //if list is empty;
  if (head.value === value) {
    head.back = newNode;
    newNode.next = head;
    return newNode;
  }
  let current = head;
  while (current !== null && current.value !== value) {
    current = current.next;
  }
  if (!current) {
    console.log("Node do not exists");
    return head;
  }
  let prev = current.back;
  prev.next = newNode;
  newNode.back = prev;

  newNode.next = current;
  current.back = newNode;
  return head;
};

let arr = [10, 20, 40, 50, 60, 70];
let dll = arrToDLL(arr);
printDLL(dll);
dll = insertBeforeNode(dll, 30, 40);
printDLL(dll);
