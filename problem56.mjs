import { potenz, time } from "./utils.mjs";

time(() => {
  function digitSum(num) {
    let sum = 0;
    for (let d of num.toString()) {
      sum += Number(d);
    }
    return sum;
  }

  let currentMax = 0;
  let [maxA, maxB] = [0, 0];
  for (let a = 1; a < 100; a++) {
    for (let b = 1; b < 100; b++) {
      let sum = digitSum(potenz(a, b));
      sum > currentMax && (currentMax = sum) && ([maxA, maxB] = [a, b]);
    }
  }
  console.log(currentMax, maxA, maxB, digitSum(potenz(88, 99)));
});
