import { getPermutations } from "./utils.mjs";

console.time();

for (let i = 100; ; i++) {
  console.log(i);
  let counter = 0;
  for (const variant of new Set(
    getPermutations((i ** 3).toString().split(""))
      .filter((e) => e[0] != "0")
      .map((e) => e.join(""))
  )) {
    if (Math.cbrt(Number(variant)) % 1 == 0) {
      counter++;
    }
    if (counter == 5) {
      break;
    }
  }
  if (counter == 5) {
    console.log({ res: i });
    break;
  }
}
console.timeEnd();
