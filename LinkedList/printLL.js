const printLL = (head) => {
  let output = "";
  while (head !== null) {
    output += head.value + "->";
    head = head.next;
  }
  console.log(output);
};
export default printLL;
