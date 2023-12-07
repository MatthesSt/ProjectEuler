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
  15: "fifteen",
  18: "eighteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  80: "eighty",
};

function getNumberString(n) {
  let [e, z, h, t] = n.toString().split("").reverse().map(Number);
  let str = "";
  if (t) str += map[t] + "thousand";
  if (h) str += map[h] + "hundred";

  if (!e && !z) return str;
  else if (t || h) str += "and";
  let m = 10 * z + e;
  if (map[m]) return str + map[m];

  if (z) {
    if (z >= 2) str += !map[z * 10] ? map[z] + "ty" : map[z * 10];
    else str += map[e] + "teen";
  }
  if (e && z != 1) {
    str += map[e];
  }

  return str;
}

let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   console.log(getNumberString(i));
// }
for (let i = 1; i <= 1000; i++) {
  sum += getNumberString(i).length;
}
console.log(sum);
