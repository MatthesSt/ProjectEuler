import { getDivisors, sumArray } from "./utils.mjs";

const threshhold = 28123;

const abundantNumbers = [];
for (let i = threshhold; i > 0; i--) {
  if (sumArray(getDivisors(i)) > i) abundantNumbers.push(i);
}

const notCreateableNumbers = [];

let currentAbundantNumbers = [abundantNumbers.pop()];
for (let i = 0; i < threshhold; i++) {
  if (i > abundantNumbers.at(-1)) currentAbundantNumbers.push(abundantNumbers.pop());
  let canCreate = false;
  check: for (let num1 of currentAbundantNumbers) {
    for (let num2 of currentAbundantNumbers) {
      if (num1 + num2 == i) {
        canCreate = true;
        break check;
      }
    }
  }
  if (!canCreate) notCreateableNumbers.push(i);
}

console.log(notCreateableNumbers.reduce((a, b) => a + b, 0));
