let sum = 0;
for (let i = 1; i <= 1000; i++) {
  let prod = 1;
  for (let j = 1; j <= i; j++) {
    prod *= i;
    if (prod.toString().length > 10) {
      prod = prod % 1e11;
    }
  }
  sum += prod;
}
console.log(sum.toString().slice(-10));
