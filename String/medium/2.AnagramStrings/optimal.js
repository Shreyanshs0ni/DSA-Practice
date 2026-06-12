function ana(string1, string2) {
  if (string1.length !== string2.length) return false;
  let arr = new Array(26).fill(0);
  for (let i = 0; i < string1.length; i++) {
    arr[string1.charCodeAt(i) - 65]++;
  }
  for (let i = 0; i < string2.length; i++) {
    arr[string2.charCodeAt(i) - 65]--;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) return false;
  }
  return true;
}

let str1 = "CAT";
let str12 = "ACT";

let str2 = "RULES";
let str22 = "LESRT";

console.log(ana(str1, str12));
console.log(ana(str2, str22));
