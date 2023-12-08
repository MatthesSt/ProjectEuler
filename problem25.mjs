import { addNumStrings } from "./utils.mjs";

let seq = [1, 1];

for (let i = 2; ; i++) {
  seq[i] = addNumStrings([seq[BigInt(i) - 2], seq[i - 1]]);
  if (seq[i].length === 1000) {
    console.log(i, "div", seq[i]);
    break;
  }
}
