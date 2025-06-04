class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function mergeLists(list1, list2) {
  let dummyNode = new ListNode(-1);
  let temp = dummyNode;
  let curr1 = list1,
    curr2 = list2;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.value < curr2.value) {
      temp.next = curr1;
      curr1 = curr1.next;
    } else {
      temp.next = curr2;
      curr2 = curr2.next;
    }
    temp = temp.next;
  }
  //attach the remaining nodes
  temp.next = curr1 !== null ? curr1 : curr2;
  return dummyNode.next;
}

const arrToLL = (arr) => {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

const print = (head) => {
  let output = "";
  while (head !== null) {
    output += head.value + "->";
    head = head.next;
  }
  console.log(output);
};

const l1 = arrToLL([1, 3, 5]);
const l2 = arrToLL([2, 4, 6]);
const merged = mergeLists(l1, l2);
print(merged); // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
