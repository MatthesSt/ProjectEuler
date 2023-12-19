import { gcd } from "./utils.mjs";
console.time("total");

// let counter = 0;
// for (let d = 1000000; d > 0; d--) {
//   if (d % 1000 == 0) console.log(d, counter);
//   for (let n = 1; n < d; n++) {
//     if (d % 2 == 0 && 0 == n % 2) continue;
//     if (gcd(d, n) == 1) counter++;
//   }
// }

let counter = 999999;
for (let n = 2; n < 1000000; n++) {
  console.time("step");
  if (n % 2 == 0) {
    for (let d = n + 1; d <= 1000000; d += 2) {
      if (gcd(d, n) == 1) counter++;
    }
  } else {
    for (let d = n + 1; d <= 1000000; d++) {
      if (gcd(d, n) == 1) counter++;
    }
  }
  if (n % 100 == 0) {
    console.log(n);
    console.timeEnd("step");
  }
}
console.log(counter);
console.timeEnd("total");
