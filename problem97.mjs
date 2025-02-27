import { time } from "./utils.mjs";

time(() => {
  let currentNumber = 28433;
  for (let i = 0; i < 7830457; i++) {
    currentNumber *= 2;
    let str = currentNumber.toString();
    if (str.length > 10) currentNumber = Number(str.slice(-10));
  }
  console.log(currentNumber + 1);
});
