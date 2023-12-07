import { getPermutations } from "./utils.mjs";

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(getPermutations(numbers)[999999].join(""));
