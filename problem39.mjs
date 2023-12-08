const map = {};

for (let p = 1; p <= 1000; p++) {
  for (let a = 1; a < p; a++) {
    for (let b = 1; b < p; b++) {
      if (a ** 2 + b ** 2 == (p - a - b) ** 2) map[p] ? map[p].push([a, b, p - a - b]) : (map[p] = [[a, b, p - a - b]]);
    }
  }
}
let currentMax = 0;
let currentP = 0;
for (let key in map) {
  console.log(map[key]);
  if (map[key].length > currentMax) {
    currentMax = map[key].length;
    currentP = key;
  }
}
console.log(currentP, currentMax);
