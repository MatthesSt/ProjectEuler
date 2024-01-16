import { getDivisors, time } from "./utils.mjs";

time(() => {
  function getNextChainMember(num) {
    let sum = 0;
    for (const n of getDivisors(num)) sum += n;
    return sum;
  }

  const chainMap = {};
  let longestChain = [];
  let maxChainLength = 0;

  function getChain(num) {
    const chain = [];
    let next = num;
    do {
      chain.push(next);
      let cur = chain.at(-1);
      if (chainMap[cur]) next = chainMap[cur];
      else {
        next = getNextChainMember(cur);
        chainMap[cur] = next;
      }
      if (next > 1000000) return [];
      if (chain.find((e) => e == next && next != chain[0])) return [];
    } while (chain[0] != next);
    return chain;
  }

  for (let i = 2; i <= 1000000; i++) {
    i % 10000 == 0 && console.timeLog("total", i);
    let chain = getChain(i);
    if (chain.length > maxChainLength) {
      maxChainLength = chain.length;
      longestChain = chain;
    }
  }
  console.log(longestChain, longestChain.sort((a, b) => a - b)[0]);
});
