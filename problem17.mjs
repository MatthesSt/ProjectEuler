const map = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  100: "one hundred",
};

function getNumberString(n) {
  let str = "";
  if (n === 1000) return "one thousand";
  if (n > 100) str += map[Math.floor(n / 100)] + " hundred ";
  let l = n % 100;
  if (l) str += "and";
  if (l == 10) return str + "ten";
  let r = Math.floor(l % 10);
  if (l >= 20) str += l >= 50 ? map[Math.floor(l / 10)] + "ty" : map[Math.floor(l / 10) * 10];
  if (l > 10 && l < 20) str += l > 13 ? map[l % 10] + "teen" : map[l];

  if (l % 10) {
    str += map[l % 10];
  }
  return str;
}

let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   console.log(getNumberString(i));
// }
for (let i = 1; i <= 1000; i++) {
  sum += getNumberString(i)
    .split("")
    .filter((e) => e != " ").length;
}
console.log(sum);
