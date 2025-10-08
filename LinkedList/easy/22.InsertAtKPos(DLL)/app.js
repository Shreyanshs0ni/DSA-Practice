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
const insertAtK = (head, target, k) => {
  const newNode = new Node(target);
  if (!head) return newNode; //if list is empty;
  //if k is head;
  if (k === 1) {
    head.back = newNode;
    newNode.next = head;
    return newNode;
  }
  let count = 1;
  let current = head;
  while (current !== null && count < k) {
    count++;
    current = current.next;
  }
  if (!current) {
    //inserting at tail
    let tail = head;
    while (tail.next) tail = tail.next;
    tail.next = newNode;
    newNode.back = tail;
    return head;
  }
  //insert before the current node
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
dll = insertAtK(dll, 30, 3);
printDLL(dll);
