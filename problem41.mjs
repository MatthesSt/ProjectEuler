import { getPermutations, isPrime } from "./utils.mjs";

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let panPrimes = [];

for (let i = 2; i <= 9; i++) {
  panPrimes.push(
    getPermutations(digits.slice(0, i))
      .map((e) => e.join(""))
      .filter((e) => isPrime(Number(e)))
  );
}

console.log(panPrimes.flatMap((e) => e).sort((a, b) => b - a)[0]);
