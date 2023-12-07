const map = {};

function buildCollatz(arr) {
  let n = arr.at(-1);
  if (n == 1) return arr;
  if (map[n]) {
    return buildCollatz(arr.slice(0, -1).concat(map[n]));
  }
  return buildCollatz([...arr, n % 2 == 0 ? n / 2 : 3 * n + 1]);
}

for (let i = 1; i < 1000000; i++) {
  map[i] = buildCollatz([i]);
}

console.log(
  Object.entries(map)
    .map((e) => [e[0], e[1].length])
    .sort((a, b) => a[1] - b[1])
    .at(-1)
);
