import { time } from "./utils.mjs";

time(() => {
  const chainMap = {};
  function is89Chain(num) {
    if (chainMap[num]) return chainMap[num];
    let sum = 0;
    for (let d of num.toString()) sum += d ** 2;
    if (sum == 1) return false;
    if (sum == 89) return true;
    return (chainMap[sum] = is89Chain(sum));
  }

  let counter = 0;
  for (let i = 10000000; i > 0; i--) {
    is89Chain(i) && counter++;
  }
  console.log(counter);
}); // 2.1sec
