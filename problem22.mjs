import names from "./0022_names.json" assert { type: "json" };
import { getCharcodeSum } from "./utils.mjs";

const test = ["AB", "B", "C"];
console.log(names.sort((a, b) => (a < b ? -1 : 1)).reduce((a, b, i) => a + (getCharcodeSum(b) - 64 * b.length) * (i + 1), 0));
