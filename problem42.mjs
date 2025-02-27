import words from "./0042_words.json" assert { type: "json" };
import { getCharcodeSum, time } from "./utils.mjs";

time(() => {
  let tCache = {};

  function t(n) {
    return tCache[n] ?? (tCache[n] = n ** 2 / 2 + n / 2);
  }

  function isT(n) {
    for (let i = 0; i < n; i++) {
      if (t(i) == n) {
        return true;
      }
    }
    return false;
  }

  let count = 0;

  let tWords = [];

  for (let word of words) {
    if (isT(getCharcodeSum(word) - 63 * word.length)) {
      count++;
      tWords.push(word);
    }
  }

  console.log(count);
});
