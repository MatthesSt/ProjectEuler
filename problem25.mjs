let seq = {
  f: 1,
  s: 1,
  t: 2,
};
let numberCounter = 3;
let digitCounter = 1;
for (; digitCounter < 1000; ) {
  let next = {
    f: seq.s,
    s: seq.t,
    t: seq.s + seq.t,
  };
  if (next.t.toString().length > seq.t.toString().length) {
    digitCounter++;
  }
  if (next.t.toString().length > 10) {
    next.f = Number(next.f.toString().slice(0, 9));
    next.s = Number(next.s.toString().slice(0, 9));
    next.t = Number(next.t.toString().slice(0, 10));
  }
  seq = { ...next };
  numberCounter++;
}

console.log(seq, digitCounter, numberCounter);
