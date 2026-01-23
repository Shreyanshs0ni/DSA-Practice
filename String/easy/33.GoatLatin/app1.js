/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let arr = sentence.split(" ");
  let append = "a";
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < arr.length; i++) {
    if (vowels.has(arr[i][0])) {
      arr[i] = arr[i] + "ma";
    } else {
      arr[i] = arr[i].slice(1) + arr[i][0] + "ma";
    }
    arr[i] = arr[i] + append;
    append += "a";
  }
  return arr.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin")); //"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")); // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
