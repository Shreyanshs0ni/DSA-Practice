function lemondeChange(customer) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < customer.length; i++) {
    if (customer[i] === 20) {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    } else if (customer[i] === 10) {
      if (five > 0) {
        five--;
        ten++;
      } else {
        return false;
      }
    } else {
      five++;
    }
  }
  return true;
}

function main() {
  console.log(lemondeChange([5, 5, 5, 10, 20]));
  console.log(lemondeChange([5, 5, 10, 10, 20]));
}

main();
