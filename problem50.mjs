import { isPrime } from "./utils.mjs";

const primes = [];
for (let i = 2; i < 1000; i++) {
  if (isPrime(i)) primes.push(i);
}
console.log(primes);
let biggestPrime = 2;
let biggestConsecutivePrimes = 0;
for (let prime of primes) {
  let left = 0;
  let right = 0;
  for (; left < 1000000; ) {
    let primeSum = primes.slice(left, right).reduce((a, b) => a + b, 0);
    if (primeSum == prime && prime > biggestPrime) {
      biggestPrime = prime;
      biggestConsecutivePrimes = right - left;
    } else {
      primeSum > prime ? left++ : right++;
    }
  }
}

console.log(biggestPrime, biggestConsecutivePrimes, isPrime(biggestPrime));
