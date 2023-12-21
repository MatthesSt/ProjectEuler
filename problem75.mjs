import { time } from "./utils.mjs";

time(() => {
  const map = {};
  for (let l = 1500000; l >= 12; l--) {
    for (let c = l - 2; c >= 5; c--) {
      for (let b = c - 1; b >= 1; b--) {
        let a = l - c - b;
        if (a > b || a < 1) continue;
        if (a * a + b * b == c * c) {
          map[l] = map[l] + 1 || 1;
        }
      }
    }
  }
  let counter = 0;
  for (let key in map) {
    if (map[key] == 1) counter++;
  }
  console.log(counter);
});
