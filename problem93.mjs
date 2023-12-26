import { time } from "./utils.mjs";

time(() => {
  function getArea(a, b, c) {
    return 0.25 * Math.sqrt(a + b + c) * Math.sqrt(-a + b + c) * Math.sqrt(a - b + c) * Math.sqrt(a + b - c);
  }

  function isInt(num) {
    return Math.abs(num - Math.round(num)) % 1 < 1e-12;
  }

  let perimeterCount = 0;
  for (let i = 5; ; i++) {
    i % 10000000 == 0 && console.timeLog("total", i);
    if (getArea(i, i, i + 1) % 1 == 0 || isInt(getArea(i, i, i + 1))) {
      perimeterCount += i * 3 + 1;
    }
    if (getArea(i, i, i - 1) % 1 == 0 || isInt(getArea(i, i, i - 1))) {
      perimeterCount += i * 3 - 1;
    }
    if (3 * i + 2 > 1000000000) break;
  }
  console.log(perimeterCount);
});
