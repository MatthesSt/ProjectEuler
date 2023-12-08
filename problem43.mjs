import { getPermutations } from "./utils.mjs";

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const perms = getPermutations(digits).filter((e) => e[0] != "0");

console.log(perms);
