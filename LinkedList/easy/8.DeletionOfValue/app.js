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

function deleteByValue(head, k) {
  if (head == null) return head;
  //case1 : head is k node
  if (head.value == k) return head.next;

  let current = head;

  while (current.next !== null && current.next.value !== k) {
    current = current.next;
  }
  //case2 : k is found in the list
  if (current.next !== null) {
    current.next = current.next.next;
  }
  //if k is not found
  return head;
}

function print(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join("->"));
}

const arr = [10, 20, 30, 40, 50];
const k = 30;

let ll = arrToLL(arr); // ✅ Convert array to linked list

console.log("Before deleting:");
print(ll);

ll = deleteByValue(ll, k); // ✅ Pass the linked list, not the array

console.log("After deleting:");
print(ll);
