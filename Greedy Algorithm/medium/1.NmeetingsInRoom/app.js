function nMeetingsInRoom(n, start, end) {
  const interval = start.map((s, i) => ({
    start: s,
    end: end[i],
  }));
  interval.sort((a, b) => a.end - b.end);
  let ans = 0;
  let lastMeetingEndTime = 0;
  for (let i = 0; i < n; i++) {
    if (interval[i].start >= lastMeetingEndTime) {
      ans++;
      lastMeetingEndTime = interval[i].end;
    }
  }
  return ans;
}

console.log(nMeetingsInRoom(6, [1, 3, 0, 5, 8, 5], [2, 4, 5, 7, 9, 9]));
console.log(nMeetingsInRoom(2, [1, 5], [7, 8]));
