console.time();
let nums = [];

for (let i = 1; i < 10; i++) {
  for (let k = 0; k <= 21; k++) {
    if ((i ** k).toString().length == k) nums.push(i ** k);
  }
}

console.log(nums);
console.timeEnd();
