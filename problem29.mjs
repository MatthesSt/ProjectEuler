import { mulNumStringArr } from "./utils.mjs";

let terms = [];

for (let i = 2; i <= 100; i++) {
  for (let j = 2; j <= 100; j++) {
    terms.push(mulNumStringArr(Array(i).fill(j.toString())));
  }
}
console.log([...new Set(terms)].length);
