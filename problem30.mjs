const numbers = [];

for (let i = 2; i < 10000000; i++) {
  if (
    i
      .toString()
      .split("")
      .reduce((a, b) => a + b ** 5, 0) === i
  )
    numbers.push(i);
}

console.log(numbers.reduce((a, b) => a + b));
