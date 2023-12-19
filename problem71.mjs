import { gcd } from "./utils.mjs";
console.time();

let result = 2 / 7;
let numerator = "2";

for (let d = 1000000; d > 0; d--) {
  for (let left = ~~((d / 7) * 2), right = (d * 3) / 7; left < right; left++) {
    if (left / d > result && gcd(d, left) == 1) {
      numerator = left;
      result = left / d;
    }
  }
}
console.log(numerator);
console.timeEnd();
