let map = new Map();
let arr = new Array();

for (let i = 1; i <= 10; i++) {
  arr.push(i);
  map.set(i, true);
}

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 6) {
//     console.log(true);
//     break;
//   }
// }

if (map.has(11)) {
  console.log(true);
} else {
  console.log(false);
}
