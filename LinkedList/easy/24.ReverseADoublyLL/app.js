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
const reverseDLL = (head) => {
  let newHead = null,
    current = head;
  while (current !== null) {
    //swap next and back pointers
    let temp = current.back;
    current.back = current.next;
    current.next = temp;
    //move to the new head (which is now in back)
    newHead = current;
    current = current.back;
  }

  return newHead;
};

// === ✅ TEST CASE ===
let arr = [10, 20, 30, 40];
let dll = arrToDLL(arr);
console.log("Original DLL:");
printDLL(dll);

dll = reverseDLL(dll);
console.log("\nReversed DLL:");
printDLL(dll);
