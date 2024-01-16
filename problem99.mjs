import pairs from "./0099_base_exp.json" assert { type: "json" };
import { mulNumStringArr, time } from "./utils.mjs";

time(() => {
  // console.log(pairs);
  function getDigitCount(a, b) {
    return mulNumStringArr(Array(b).fill(a));
  }
  let biggest = "";
  for (const [a, b] of pairs) {
    if (!pairs.find(([c, d]) => c > a && d > b)) {
      console.timeLog("total", [a, b]);
      let next = getDigitCount(a, b);
      if (next.length > biggest.length) {
        biggest = next;
      }
    }
  }
  console.log(biggest.length);
});
