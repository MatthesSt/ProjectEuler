function getPn(n) {
  return (3 * n * n - n) / 2;
}
function getTn(n) {
  return (n * n + n) / 2;
}
function getHn(n) {
  return 2 * n * n - n;
}

let Ps = [];
let Ts = [];
let Hs = [];
for (let i = 0; i < 100000; i++) {
  Ps.push(getPn(i));
  Ts.push(getTn(i));
  Hs.push(getHn(i));
}

Ts = Ts.splice(286);
Hs = Hs.splice(143);
Ps = Ps.splice(165);
for (let n of Ts) {
  if (Ps.find((e) => e == n) && Hs.find((e) => e == n)) {
    console.log(n);
    break;
  }
}
