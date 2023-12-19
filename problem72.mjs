import { gcd } from "./utils.mjs";
console.time();

let counter = 0;
for (let d = 1000000; d > 0; d--) {
  if (d % 1000 == 0) console.log(d, counter);
  for (let n = 1; n < d; n++) {
    if (d % 2 == 0 && 0 == n % 2) continue;
    if (gcd(d, n) == 1) counter++;
  }
}
console.log(counter);
console.timeEnd();
