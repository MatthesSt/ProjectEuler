// 2 ** 32 =  32768 => 2+3+7+6+8 = 26
// 2 ** 1000 ??

let currentValue = "2";
for (let i = 1; i < 11; i++) {
  currentValue = mul(currentValue, currentValue);
}

//FIXME:
function mul(a, b) {
  let currentPro = "";
  let bigger = a.length > b.length ? a : b;
  let hangover = 0;
  for (let charIndex in bigger) {
    let digitPro = Number(a[a.length - charIndex - 1] || 1) * Number(b[b.length - charIndex - 1] || 1);
    currentPro = (digitPro % 10) + hangover + currentPro;
    hangover = Math.floor(digitPro / 10);
  }
  return hangover ? hangover + currentPro : currentPro;
}

console.log(mul("1024", "356"));
