import { time } from "./utils.mjs";

time(() => {
  let [small, large, next] = [1n, 1n, 2n];
  let l = 4;

  function getFib(k) {
    for (; l <= k; l++) {
      [small, large, next] = [large, next, large + next];
    }
    return next;
  }
  function startsPan(str) {
    let digitMask = 0;

    for (let i = 0; i < 9; i++) {
      const digit = parseInt(str[i]);

      // Check if the character is a digit from 1 to 9
      if (digit >= 1 && digit <= 9) {
        // Set the corresponding bit in the mask
        digitMask |= 1 << (digit - 1);

        // If all bits are set, return true
        if (digitMask === 0b111111111) {
          return true;
        }
      } else {
        // If a non-digit character is encountered, break the loop
        break;
      }
    }

    // If the loop completes and not all digits are found, return false
    return false;
  }
  function endsPan(str) {
    let digitMask = 0;
    const len = str.length;

    // Start iterating from the end of the string
    for (let i = len - 1; i >= 0 && len - i <= 9; i--) {
      const digit = parseInt(str[i]);

      // Check if the character is a digit from 1 to 9
      if (digit >= 1 && digit <= 9) {
        // Set the corresponding bit in the mask
        digitMask |= 1 << (digit - 1);

        // If all bits are set, return true
        if (digitMask === 0b111111111) {
          return true;
        }
      } else {
        // If a non-digit character is encountered, break the loop
        break;
      }
    }

    // If the loop completes and not all digits are found, return false
    return false;
  }
  let n = "";
  for (let i = 300000; ; i++) {
    n = getFib(i).toString();
    i % 10000 == 0 && console.timeLog("total", i, n.length);
    if (startsPan(n) && endsPan(n)) {
      console.log({ answer: i });
      break;
    }
  }
});
