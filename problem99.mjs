import pairs from "./0099_base_exp.json" assert { type: "json" };
import { potenz, time } from "./utils.mjs";

time(() => {
  function getDigitCount(a, b) {
    return potenz(a, b);
  }
  let biggest = "";
  let bigIndex = 0;
  for (const index in pairs) {
    const [a, b] = pairs[index];
    if (!pairs.find(([c, d]) => c > a && d > b)) {
      console.timeLog("total", [a, b], biggest.length, bigIndex, index);
      let next = getDigitCount(a, b);
      if (next.length > biggest.length || BigInt(next) > BigInt(biggest)) {
        biggest = next;
        bigIndex = index;
      }
    }
  }
  console.log(bigIndex);
});
