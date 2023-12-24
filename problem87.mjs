import { isPrime, time } from "./utils.mjs";

time(() => {
  const squareLimit = ~~Math.sqrt(50000000);
  const cubeLimit = ~~Math.cbrt(50000000);
  const fourthLimit = ~~Math.sqrt(squareLimit);

  const sqarePrimes = [];
  for (let i = 2; i <= squareLimit; i++) {
    if (isPrime(i)) sqarePrimes.push(i);
  }
  const cubePrimes = sqarePrimes.filter((e) => e <= cubeLimit);
  const fourthPrimes = cubePrimes.filter((e) => e <= fourthLimit);

  let numbers = new Set();
  for (let a of sqarePrimes) {
    for (let b of cubePrimes) {
      for (let c of fourthPrimes) {
        let num = a ** 2 + b ** 3 + c ** 4;
        num < 50000000 && numbers.add(num);
      }
    }
  }
  console.log(numbers.size);
});
