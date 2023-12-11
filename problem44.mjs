function getPn(n) {
  return map[n] ?? (map[n] = (n * (3 * n - 1)) / 2);
}

const map = {};

for (let i = 0; i < 1e3; i++) {
  getPn(i);
}
const numList = Object.values(map);

let nums = [];
for (let key in map) {
  for (let key2 in map) {
    if (numList.find((e) => map[key] + map[key2] == e) && numList.find((e) => e == Math.abs(map[key] - map[key2])))
      nums.push(Math.abs(map[key] - map[key2]));
  }
}
console.log(nums);
