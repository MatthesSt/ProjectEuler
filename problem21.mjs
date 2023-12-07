import { getDivisors, sumArray } from "./utils.mjs";

let sum = 0;

for (let i = 10000; i > 0; i--) {
  let first = sumArray(getDivisors(i));
  let s = sumArray(getDivisors(first)) == i && i != first;
  console.log(i, s);
  if (s) sum += i;
}

console.log(sum);
