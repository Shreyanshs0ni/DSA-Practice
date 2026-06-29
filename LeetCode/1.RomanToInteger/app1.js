//Done by me

// function RomanToInteger(s) {
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
//       total -= roman[s[i]];
//     } else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
//       total -= roman[s[i]];
//     } else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
//       total -= roman[s[i]];
//     } else {
//       total += roman[s[i]];
//     }
//   }
//   return total;
// }

function RomanToInteger(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      total -= roman[s[i]];
    } else {
      total += roman[s[i]];
    }
  }
  return total;
}

console.log(RomanToInteger("MCMXCIV"));
console.log(RomanToInteger("LVIII"));
