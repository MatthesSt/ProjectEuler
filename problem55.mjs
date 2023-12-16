import { isPalindrome } from "./utils.mjs";

function isLychrel(num) {
  let currentSum = num;
  for (let i = 0; i <= 50; i++) {
    currentSum += reverseNum(currentSum);
    if (isPalindrome(currentSum)) return true;
  }
  return false;
}

function reverseNum(num) {
  let s = "";
  for (let d of num.toString()) s = d + s;
  return Number(s);
}

let lychrelCounter = 0;
for (let i = 10; i < 10000; i++) {
  lychrelCounter += Number(isLychrel(i));
}

console.log(lychrelCounter);
