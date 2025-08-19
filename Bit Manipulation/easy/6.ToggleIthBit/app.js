const toggleIthbit = (n, i) => {
  return n ^ (1 << i);
};

console.log(toggleIthbit(13, 2));
