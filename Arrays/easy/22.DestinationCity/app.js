/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let set = new Set();
  for (let i = 0; i < paths.length; i++) {
    set.add(paths[i][0]);
  }
  for (let i = 0; i < paths.length; i++) {
    if (!set.has(paths[i][1])) {
      return paths[i][1];
    }
  }
};
console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
console.log(destCity([["A", "Z"]]));
console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);

//set should be used when map is not explicitly needed