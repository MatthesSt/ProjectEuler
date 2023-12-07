import { mulNumStringArr } from "./utils.mjs";

console.log(
  mulNumStringArr(
    Array(99)
      .fill(0)
      .map((_, i) => (i + 1).toString())
  )
    .split("")
    .reduce((a, b) => +a + +b, 0)
);
