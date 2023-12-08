import { getPermutations, isPrime } from "./utils.mjs";

let primes = [];

for (let i = 0; i < 1000000; i++) {
  if (isPrime(i)) primes.push(i);
}

function getNumberRotations(num) {
  const rotations = [];
  const numString = num.toString();
  for (let i in numString) {
    rotations.push(numString.slice(i) + numString.slice(0, i));
  }
  return rotations;
}

const circularPrimes = [];
for (let prime of primes) {
  const perms = getNumberRotations(prime);
  if (perms.every((e) => isPrime(e))) circularPrimes.push(prime);
}

console.log(circularPrimes.length);
