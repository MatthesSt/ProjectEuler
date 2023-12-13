const map = {
  200: [100, 100],
  100: [50, 50],
  50: [20, 20, 10],
  20: [10, 10],
  10: [5, 5],
  5: [2, 2, 1],
  2: [1, 1],
  1: 1,
};

function getVariation(arr) {
  return [arr].concat([arr.flatMap((e) => (e == 1 ? e : map[e]))]);
}

console.log(getVariation([200]));
