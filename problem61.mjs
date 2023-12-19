console.time();

const p3 = (n) => (n * (n + 1)) / 2;
const p4 = (n) => n * n;
const p5 = (n) => (n * (3 * n - 1)) / 2;
const p6 = (n) => n * (2 * n - 1);
const p7 = (n) => (n * (5 * n - 3)) / 2;
const p8 = (n) => n * (3 * n - 2);

let p3s = [];
let p4s = [];
let p5s = [];
let p6s = [];
let p7s = [];
let p8s = [];

for (let i = 0; i < 100; i++) {
  p3s.push(p3(i));
  p4s.push(p4(i));
  p5s.push(p5(i));
  p6s.push(p6(i));
  p7s.push(p7(i));
  p8s.push(p8(i));
}

p3s = p3s.filter((e) => e < 10000);
p4s = p4s.filter((e) => e < 10000).filter((e) => p3s.find((p) => isNext(p, e)));
p5s = p5s.filter((e) => e < 10000).filter((e) => p4s.find((p) => isNext(p, e)));
p6s = p6s.filter((e) => e < 10000).filter((e) => p5s.find((p) => isNext(p, e)));
p7s = p7s.filter((e) => e < 10000).filter((e) => p6s.find((p) => isNext(p, e)));
p8s = p8s.filter((e) => e < 10000).filter((e) => p7s.find((p) => isNext(p, e)));

function isNext(a, b) {
  return a.toString().slice(2) == b.toString().slice(0, 2);
}

function hasCycle(numArr) {
  let cycle = [numArr.shift()];
  for (let i = 0; i < numArr.length; i++) {
    let next = numArr.find((e) => isNext(cycle.at(-1), e));
    if (!next) return false;

    cycle.push(next);
    i--;
    numArr.splice(i - 1, 1);
  }
  return true;
}

// for (let n3 of p3s) {
//   for (let n4 of p4s.filter((e) => isNext(n3, e))) {
//     for (let n5 of p5s.filter((e) => isNext(n4, e))) {
//       for (let n6 of p6s.filter((e) => isNext(n5, e))) {
//         for (let n7 of p7s.filter((e) => isNext(n6, e))) {
//           for (let n8 of p8s.filter((e) => isNext(n7, e))) {
//             console.log([n3, n4, n5, n6, n7, n8].reduce((a, b) => a + b));
//           }
//         }
//       }
//     }
//   }
// }

console.log([p3s.length, p4s.length, p5s.length, p6s.length, p7s.length, p8s]);
console.log(hasCycle([8128, 2882]));
console.timeEnd();
