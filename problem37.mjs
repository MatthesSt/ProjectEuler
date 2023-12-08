import { isPrime } from "./utils.mjs";
function truncatedVariants(num) {
  let numString = num.toString();
  const variants = [];
  for (let i = 0; i < numString.length; i++) {
    variants.push(numString.slice(i), numString.slice(0, i));
  }
  return [...new Set(variants)].filter((e) => e != "");
}

const truncatablePrimes = [];

for (let i = 10; truncatablePrimes.length < 11; i++) {
  if (truncatedVariants(i).every((e) => isPrime(e))) truncatablePrimes.push(i);
}
console.log(truncatablePrimes.reduce((a, b) => a + b));
