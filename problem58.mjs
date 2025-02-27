import { isPrime, time } from "./utils.mjs";
time(() => {
  let diagonalNums = 1;
  let step = 2;
  let currentNum = 1;

  let totalPrimes = 0;

  for (let i = currentNum; ; i++) {
    for (let a = 1; a <= 4; a++) {
      let n = currentNum + step;
      diagonalNums++;
      if (isPrime(n)) totalPrimes++;
      currentNum = n;
    }
    if (totalPrimes / diagonalNums < 0.1) {
      console.log({ i: i * 2 + 1, frac: totalPrimes / diagonalNums });
      break;
    }
    step += 2;
  }
});
