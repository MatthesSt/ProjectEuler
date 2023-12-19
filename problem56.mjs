import { mulNumStringArr } from "./utils.mjs";

function digitSum(num) {
  let sum = 0;
  for (let d of num.toString()) {
    sum += Number(d);
  }
  return sum;
}

let currentMax = 0;
for (let a = 1; a < 100; a++) {
  for (let b = 1; b < 100; b++) {
    let sum = digitSum(mulNumStringArr(Array(b).fill(a.toString())));
    if (sum > currentMax) currentMax = sum;
  }
}

console.log(currentMax);
