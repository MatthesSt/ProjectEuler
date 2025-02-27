import { time, getPermutations, factorial, progress } from "./utils.mjs";

time(() => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const variations = getPermutations(digits).map((v) => v.join``);

  const concatProd = (a, n) => {
    let p = "";
    for (let i = 1; i <= n; i++) p += a * i;
    return p;
  };

  let max = "";
  for (let a = 1; a < 10 ** 5; a++) {
    for (let n = 2; ; n++) {
      let p = concatProd(a, n);
      if (p.length > 9) break;
      if (p > max && variations.find((v) => v == p)) {
        max = p;
      }
    }
  }
  console.log(max);
});
