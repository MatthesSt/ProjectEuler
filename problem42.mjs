import words from "./0022_names.json" assert { type: "json" };
import { getCharcodeSum } from "./utils.mjs";

function t(n) {
  return n ** 2 / 2 + n / 2;
}

function isT(n) {
  for (let i = 0; i < n; i++) {
    if (t(i) == n) {
      return true;
    }
  }
  return false;
}

let count = 0;

for (let word of words) {
  if (isT(getCharcodeSum(word) - 63 * word.length)) count++;
}

console.log(count);
