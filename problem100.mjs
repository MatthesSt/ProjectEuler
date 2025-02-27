import { time } from "./utils.mjs";

time(() => {
  for (let i = 10 ** 12, n = Math.floor(i * Math.sqrt(0.5)); ; ) {
    let ratio = (n / i) * ((n - 1) / (i - 1));
    if (ratio > 0.5) {
      i++;
    } else if (ratio < 0.5) {
      n++;
    } else {
      console.timeLog("total", { n, i, ratio });
      n++;
    }
  }
});
