import { NK, time } from "./utils.mjs";

time(() => {
  const nums = [];

  for (let n = 1; n <= 100; n++) {
    for (let k = 0; k < n; k++) {
      nums.push(NK(n, k));
    }
  }

  console.log(nums.filter((e) => +e > 1000000).length);
});
