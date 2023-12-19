let primes = [];

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

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
  // console.log(prime);
  const perms = getNumberRotations(prime);
  if (perms.every((e) => isPrime(e))) circularPrimes.push(prime);
}

console.log(circularPrimes.length);
