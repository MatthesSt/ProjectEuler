import { isPalindrome } from "./utils.mjs";

let sum = 0;
for (let i = 0; i < 1000000; i++) {
  if (isPalindrome(i) && isPalindrome(i.toString(2))) sum += i;
}
console.log(sum);
