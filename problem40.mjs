let numbers = Array(1000000)
  .fill(0)
  .map((_, i) => i + 1);

const numString = numbers.join("");

console.log(
  Array(7)
    .fill(0)
    .map((_, i) => numString[10 ** i - 1])
    .reduce((a, b) => a * b, 1)
);
