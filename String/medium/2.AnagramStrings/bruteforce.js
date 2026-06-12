function ana(string1, string2) {
  if (string1.length !== string2.length) return false;
  const sortedString1 = string1.split("").sort();
  const sortedString2 = string2.split("").sort();

  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1[i] !== sortedString2[i]) return false;
  }
  return true;
}

let str1 = "CAT";
let str12 = "ACT";

let str2 = "RULES";
let str22 = "LESRT";

console.log(ana(str1, str12));
console.log(ana(str2, str22));
