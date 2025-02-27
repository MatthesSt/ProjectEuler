import { isPrime, time } from "./utils.mjs";

time(() => {
  let currentStreak = 0;
  let prod = 0;
  for (let a = -999; a < 1000; a++) {
    console.timeLog("total", a);
    for (let b = -1000; b <= 1000; b++) {
      for (let n = 0; isPrime(n ** 2 + a * n + b); n++) {
        if (n > currentStreak) {
          prod = a * b;
          currentStreak = n + 1;
        }
      }
    }
  }
  console.log(currentStreak, prod);
});
