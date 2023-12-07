export function chunk(arr, len) {
  let chunks = [];
  let i = 0;
  let n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}

export function addNumStrings(arr) {
  arr = arr.filter((e) => e.length != 0);
  let currentSum = "";
  if (arr.length < 2) return arr[0] || 0;
  let bigger = arr.sort((a, b) => b.length - a.length)[0];
  let hangover = [];
  for (let charIndex in bigger) {
    let digitSum = arr.reduce((a, c) => a + Number(c[c.length - charIndex - 1] || 0), 0);
    let digit = Number(digitSum) + Number(hangover.pop() || "");
    currentSum = (digit % 10) + currentSum;
    hangover = addNumStrings([hangover.join(""), Math.floor(digit / 10).toString()]).split("");
  }
  return (hangover.length != 0 ? hangover.join("") + currentSum : currentSum).replace(/^0+/, "");
}

export function mulNumStrings(a, b) {
  let currentPro = "";
  let [bigger, smaller] = a.length >= b.length ? [a, b] : [b, a];
  for (let charIndex in smaller) {
    for (let i = 0; i < Number(smaller[charIndex]); i++) {
      currentPro = addNumStrings([currentPro, ...Array(10 ** (smaller.length - 1 - charIndex)).fill(bigger)]);
    }
  }
  return currentPro;
}
export function mulNumStringArr(arr) {
  arr = arr.filter((e) => e.length != 0 && e != 1);
  if (arr.length < 2) return arr[0] || 0;
  let currentPro = arr.pop();
  for (let num of arr) {
    currentPro = mulNumStrings(currentPro, num);
  }
  return currentPro;
}
