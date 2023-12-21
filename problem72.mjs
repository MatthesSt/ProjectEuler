console.time("total");

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

let counter = 1;
for (let d = 1000000; d >= 2; d--) {
  if (d % 1000 == 999) console.time("step");
  for (let n = 1; n < d / 2; n++) {
    counter += gcd(d, n);
    counter += gcd(d, d - n);
  }
  if (d % 1000 == 0) {
    console.log(d);
    console.timeEnd("step");
  }
}

console.log(counter);
console.timeEnd("total");
