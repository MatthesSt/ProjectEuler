import { isPrime } from "./utils.mjs";
console.time();

function truncatedVariants(num) {
  let numString = num.toString();
  const variants = new Set();
  for (let i = 0; i < numString.length; i++) {
    variants.add(numString.slice(i));
    variants.add(numString.slice(0, i));
  }
  variants.delete("");
  return [...variants];
}

let truncatablePrimeSum = 0;

for (let i = 23, s = 0; s < 11; i++) {
  if (truncatedVariants(i).every(isPrime)) {
    truncatablePrimeSum += i;
    s++;
  }
}
console.log(truncatablePrimeSum);

console.timeEnd();
