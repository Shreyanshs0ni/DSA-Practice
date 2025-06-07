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
    prev = prev.next;
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

const deleteHead = (head) => {
  if (!head) return null; //empty list
  if (!head.next) return null; //only one node in the list
  let newNode = head.next;
  newNode.back = null;
  return newNode;
};

const arr = [10, 20, 30, 40];
let head = arrToDLL(arr);

console.log("Before deletion:");
printDLL(head);

head = deleteHead(head); // delete 10

console.log("After deletion of head:");
printDLL(head);
