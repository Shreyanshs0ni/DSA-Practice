const addTwoBinaryStrings = (s1, s2) => {
  let result = "";
  let carry = 0;
  let i = s1.length - 1;
  let j = s2.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(s1[i--]);
    }
    if (j >= 0) {
      sum += parseInt(s2[j--]);
    }
    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }
  return result;
};

console.log(addTwoBinaryStrings("1010", "1011"));
