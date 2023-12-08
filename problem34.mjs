import { factorial } from "./utils.mjs";

let sum = 0;
let numbers = [];
for (let i = 3; i < 100000; i++) {
  if (
    i
      .toString()
      .split("")
      .reduce((a, b) => a + factorial(b), 0) == i
  ) {
    sum += i;
    numbers.push(i);
  }
}

console.log(sum);
