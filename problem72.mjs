console.time("total");

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

let counter = 1;
for (let d = 1000000; d >= 2; d--) {
  if (d % 1000 == 0) {
    console.timeLog("total", d);
  }
  for (let n = 1; n < d / 2; n++) {
    counter += gcd(d, n) == 1;
    counter += gcd(d, d - n) == 1;
  }
}

console.log(counter);
console.timeEnd("total"); //total: 13:44:35.644 (h:mm:ss.mmm)
