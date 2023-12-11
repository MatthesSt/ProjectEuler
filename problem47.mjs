import { primeFactors } from "./utils.mjs";

for (let i = 1; ; i++) {
  const f1 = compressFactors(primeFactors(i));
  const f2 = compressFactors(primeFactors(i + 1));
  const f3 = compressFactors(primeFactors(i + 2));
  const f4 = compressFactors(primeFactors(i + 3));

  const fac = [f1, f2, f3, f4];
  let distinct = true;
  for (let k = 0; k < 4; k++) {
    let other = [...fac.slice(0, k), fac.slice(k + 1)];
    for (let key in fac[k]) {
      if (other.some((e) => Object.keys(e).find((key2) => e[key2] == fac[k][key]))) {
        distinct = false;
      }
    }
  }
  if (distinct) {
    console.log(i);
    break;
  }
}

function compressFactors(arr) {
  let res = {};
  for (let n of arr) {
    res[n] = arr.filter((e) => e == n).length;
  }
  return res;
}
