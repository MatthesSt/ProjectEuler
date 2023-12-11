import { addNumStrings, mulNumStringArr } from "./utils.mjs";

let sum = "";
for (let i = 1; i < 1000; i++) {
  sum = addNumStrings([sum, mulNumStringArr(Array(i).fill(i.toString()))]);
  while (sum.length > 10) {
    let arr = sum.split("");
    arr.shift();
    sum = arr.join("");
  }
}
console.log(sum);
