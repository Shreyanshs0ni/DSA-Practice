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

function print(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join("->"));
}

function deleteTail(head) {
  if (head == null || head.next == null) return null;
  let current = head;
  while (current.next.next !== null) {
    current = current.next;
  }
  current.next = null;
  return head;
}

const arr = [10, 20, 30, 40, 50];
const linkedList = arrToLL(arr);
print(linkedList);
print(deleteTail(linkedList));
