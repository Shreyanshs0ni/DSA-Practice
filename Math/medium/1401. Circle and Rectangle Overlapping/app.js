var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  let closestX = 0;
  let closestY = 0;
  if (xCenter < x1) {
    closestX = x1 - xCenter;
  } else if (xCenter > x2) {
    closestX = xCenter - x2;
  }

  if (yCenter > y2) {
    closestY = yCenter - y2;
  } else if (yCenter < y1) {
    closestY = y1 - yCenter;
  }

  let distanceSquared = closestX * closestX + closestY * closestY;

  return distanceSquared <= radius * radius;
};

console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1));
console.log(checkOverlap(1, 1, 1, 1, -3, 2, -1));
