let counter = 0;
for (let i = 0; i <= 200; i++) {
  for (let j = 0; j <= 100; j++) {
    for (let k = 0; k <= 40; k++) {
      for (let l = 0; l <= 20; l++) {
        for (let m = 0; m <= 10; m++) {
          for (let n = 0; n <= 4; n++) {
            for (let o = 0; o <= 2; o++) {
              for (let p = 0; p <= 1; p++) {
                if (i + 2 * j + 5 * k + 10 * l + 20 * m + 50 * n + 100 * o + 200 * p === 200) {
                  counter++;
                }
              }
            }
          }
        }
      }
    }
  }
}
console.log(counter);
