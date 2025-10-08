function firstUniqueCharacter(s) {
  let q = []; // queue to hold [char, index]

  const map = new Map(); // char → frequency

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // update frequency
    map.set(char, (map.get(char) || 0) + 1);
    // push this candidate into queue
    q.push([char, i]);

    // while front of queue is not unique, pop it
    while (q.length > 0 && map.get(q[0][0]) > 1) {
      q.shift();
    }
  }
  return q.length > 0 ? q[0][1] : -1;
}

console.log(firstUniqueCharacter("loveleetcode"));
