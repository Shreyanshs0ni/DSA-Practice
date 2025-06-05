class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function arrToLL(arr) {
  if (arr.length == 0) return null;
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i <= arr.length - 1; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

function printLL(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join("->"));
}

function deleteByPosition(head, pos) {
  if (pos === 0) return head.next;
  let current = head;
  for (let i = 0; i <= pos - 1 && current != null; i++) {
    current = current.next;
  }
  if (current && current.next) {
    current.next = current.next.next;
  }
  return head;
}

const arr = [10, 20, 30, 40, 50];
const k = 2;

let ll = arrToLL(arr); // ✅ Convert array to linked list

console.log("Before deleting:");
printLL(ll);

ll = deleteByPosition(ll, k); // ✅ Pass the linked list, not the array

console.log("After deleting:");
printLL(ll);
