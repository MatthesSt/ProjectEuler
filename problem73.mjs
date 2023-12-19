import { gcd } from "./utils.mjs";
console.time();

let counter = 0;

for (let d = 12000; d > 0; d--) {
  for (let left = ~~(d / 3) + 1, right = d / 2; left < right; left++) {
    if (gcd(d, left) == 1) counter++;
  }
}

console.log(counter);
console.timeEnd();
