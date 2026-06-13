class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
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
  let forward = "";
  let current = head;
  let tail = null;
  while (current) {
    forward += current.value + "<->";
    if (current.next === null) tail = current;
    current = current.next;
  }
  current = tail;
  let backward = "";
  while (current) {
    backward += current.value + "<->";
    current = current.prev;
  }
  forward += "null";
  backward += "null";
  console.log(forward);
  console.log(backward);
};

function insertAtHead(head, val) {
  let newNode = new Node(val, head, null);
  head.prev = newNode;
  return newNode;
}

let arr = [1, 2, 3, 4, 5, 6];
let head = arrToDLL(arr);
printDLL(head);
let head1 = insertAtHead(head, 0);
printDLL(head1);
