class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const arrToLL = (arr) => {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let temp = head;
  for (let i = 1; i < arr.length; i++) {
    temp.next = new Node(arr[i]);
    temp = temp.next;
  }
  return head;
};

const isPalindrome = (head) => {
  let stack = [];
  let temp = head;

  while (temp != null) {
    stack.push(temp.value);
    temp = temp.next;
  }

  temp = head;
  while (temp != null) {
    if (temp.value != stack.pop()) return false;
    temp = temp.next;
  }
  return true;
};

const arr = [1, 2, 3, 2, 1];

const head = arrToLL(arr);
console.log(isPalindrome(head));
