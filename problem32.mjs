import { getPermutations, time } from "./utils.mjs";

time(() => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const products = new Set([]);

  const variations = getPermutations(digits);

  for (let an = 1; an < 5; an++) {
    for (let bn = 1; bn < 5; bn++) {
      let cn = 9 - an - bn;
      for (let variation of variations) {
        let a = +variation.slice(0, an).join``;
        let b = +variation.slice(an, an + bn).join``;
        let c = +variation.slice(an + bn, an + bn + cn).join``;
        if (a * b == c) products.add(c);
      }
    }
  }
  console.log(
    [...products].reduce((a, b) => a + b, 0),
    products.size
  );
});
