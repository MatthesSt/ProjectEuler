import { isPrime } from "./utils.mjs";

console.time();

function primeConcatenable(a, b) {
  return isPrime(Number(a + "" + b)) && isPrime(Number(b + "" + a));
}

let primes = [];
for (let i = 2; i < 10000; i++) {
  if (isPrime(i)) primes.push(i);
}

const concatenable = [];

for (let p1 of primes) {
  for (let p2 of primes.filter((e) => e > p1 && primeConcatenable(p1, e))) {
    for (let p3 of primes.filter((e) => e > p2 && primeConcatenable(p1, e) && primeConcatenable(p2, e))) {
      for (let p4 of primes.filter((e) => e > p3 && primeConcatenable(p1, e) && primeConcatenable(p2, e) && primeConcatenable(p3, e))) {
        for (let p5 of primes.filter(
          (e) => e > p4 && primeConcatenable(p1, e) && primeConcatenable(p2, e) && primeConcatenable(p3, e) && primeConcatenable(p4, e)
        )) {
          if (concatenable.find((entry) => new Set([...entry, p1, p2, p3, p4, p5]).size == 5)) continue;
          concatenable.push([p1, p2, p3, p4, p5]);
        }
      }
    }
  }
}
console.log({ result: concatenable.flatMap((e) => e.reduce((a, b) => a + b, 0)) });
console.timeEnd(); //42sec
