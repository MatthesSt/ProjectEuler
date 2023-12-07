// 2 ** 32 =  32768 => 2+3+7+6+8 = 26
// 2 ** 1000 ??

import { addNumStrings, mulNumStrings, mulNumStringArr } from "./utils.mjs";

console.log(
  mulNumStringArr(Array(1000).fill("2"))
    .split("")
    .reduce((a, b) => +a + +b, 0)
);

// console.log(mulNumStringArr(Array(10000).fill("20")));
