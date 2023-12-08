let sum = 1;

for (let i = 3; i <= 1001; i += 2) {
  sum += 10 * (i - 1) + (i - 2) ** 2 * 4;
}
console.log(sum);
