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
    current = current.prev;
  }
  console.log(forward.join("<->"));
  console.log(backward.join("<->"));
};

function reverseDLL(head) {
  let st = [];
  let current = head;
  while (current) {
    st.push(current.value);
    current = current.next;
  }
  head = new Node(st.pop());
  current = head;
  while (st.length > 0) {
    const temp = new Node(st.pop(), null, current);
    current.next = temp;
    current = current.next;
  }
  return head;
}

let arr = [10, 20, 30, 40];
let dll = arrToDLL(arr);
console.log("Original DLL:");
printDLL(dll);

dll = reverseDLL(dll);
printDLL(dll);
