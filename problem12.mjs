const threshhold = 500;
let triangleNumber = 0;
let i = 1;
while (true) {
  triangleNumber += i;
  const factors = getFactors(triangleNumber);
  if (factors.length > threshhold) {
    console.log(triangleNumber);
    break;
  }
  i++;
}

function getFactors(n) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (n / i !== i) {
        factors.push(n / i);
      }
    }
  }
  return factors;
}
