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
function deleteK(head, target) {
  if (!head) return null;
  //delete the head node
  if (target === 1) {
    let newHead = head.next;
    if (newHead) newHead.back = null;
    return newHead;
  }

  let temp = head;
  let count = 1;
  while (temp !== null && count < target) {
    count++;
    temp = temp.next;
  }
  if (!temp) return head; //target is out of bound
  if (temp.back) temp.back.next = temp.next; //adjust previous node's next
  if (temp.next) temp.next.back = temp.back; //adjust next node's previous (only if not deleting tail)
  return head;
}
// Test it
const arr = [10, 20, 30, 40];

let head = arrToDLL(arr);

console.log("Before deleting tail:");
printDLL(head);

head = deleteK(head, 2); //removes 20

console.log("After deleting tail:");
printDLL(head);
