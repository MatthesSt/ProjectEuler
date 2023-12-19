import { factorial } from "./utils.mjs";
console.time();
const factorialMap = {};
function getDigitFactorialSum(num) {
  if (factorialMap[num]) return factorialMap[num];
  let sum = 0;
  for (let n of num.toString()) {
    sum += factorial(+n);
  }
  factorialMap[num] = sum;
  return sum;
}

const chainMap = {};

function getDigitFactorialChain(num) {
  if (chainMap[num]) return chainMap[num];
  let chain = [];
  chain.push(num);
  for (;;) {
    let next = getDigitFactorialSum(chain.at(-1));
    if (chainMap[next]) {
      chain.push(...chainMap[next]);
      break;
    }
    if (chain.includes(next)) break;
    chain.push(next);
  }
  chainMap[num] = chain;
  return chain;
}

let chainCounter = 0;
for (let i = 1; i < 1000000; i++) {
  chainCounter += getDigitFactorialChain(i).length == 60;
}
console.log(chainCounter);
console.timeEnd();

// with memoization 5 sec
// without 2:05 min
