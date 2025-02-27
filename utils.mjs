export function chunk(arr, len) {
  let chunks = [];
  let i = 0;
  let n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}

// export function addNumStrings(arr) {
//   arr = arr.filter((e) => e.length != 0);
//   let currentSum = "";
//   if (arr.length < 2) return arr[0] || 0;
//   let bigger = arr.sort((a, b) => b.length - a.length)[0];
//   let hangover = [];
//   for (let charIndex in bigger) {
//     let digitSum = arr.reduce((a, c) => a + Number(c[c.length - charIndex - 1] || 0), 0);
//     let digit = Number(digitSum) + Number(hangover.pop() || "");
//     currentSum = (digit % 10) + currentSum;
//     hangover = addNumStrings([hangover.join(""), Math.floor(digit / 10).toString()]).split("");
//   }
//   return (hangover.length != 0 ? hangover.join("") + currentSum : currentSum).replace(/^0+/, "");
// }

// export function mulNumStrings(a, b) {
//   let currentPro = "";
//   let [bigger, smaller] = a.length >= b.length ? [a, b] : [b, a];
//   for (let charIndex in smaller) {
//     for (let i = 0; i < Number(smaller[charIndex]); i++) {
//       currentPro = addNumStrings([currentPro, ...Array(10 ** (smaller.length - 1 - charIndex)).fill(bigger)]);
//     }
//   }
//   return currentPro;
// }
// export function mulNumStringArr(arr) {
//   arr = arr.filter((e) => e.length != 0 && e != 1);
//   if (arr.length < 2) return arr[0] || 0;
//   let currentPro = arr.pop();
//   for (let num of arr) {
//     currentPro = mulNumStrings(currentPro, num);
//   }
//   return currentPro;
// }

export function getDivisors(n) {
  if (n == 1) return [1];
  let divisors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) divisors.push(i);
  }
  return divisors;
}

export function sumArray(arr) {
  let sum = 0;
  for (const e of arr) {
    sum += Number(e);
  }
  return sum;
}

export function getCharcodeSum(string) {
  let sum = 0;
  for (let c of string) sum += c.charCodeAt(0);
  return sum;
}

export function getPermutations(inputArr) {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
}

export function factorial(num) {
  if (Number(num) === 0) return 1;
  return Number(BigInt(num) * BigInt(factorial(num - 1)));
}

export function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function isPalindrome(val) {
  let input = val.toString();
  for (let i in input) {
    if (input[i] !== input[input.length - i - 1]) return false;
  }
  return true;
}

export function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

export function NK(n, k) {
  return Number(factorial(n)) / (Number(factorial(k)) * Number(factorial(n - k)));
}

export function progress(i, arr, prevProgress) {
  if (i == 0) console.log("start");
  if (i == arr.length) console.log("done");
  let percent = Math.floor(arr.length / i);
  if (percent - prevProgress > 1 && i) console.log(`${Math.floor(arr.length / i)}% => ${i}/${arr.length}`);
  return percent;
}

export function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export function time(f, label = "total") {
  console.time(label);
  f();
  console.timeEnd(label);
}

export function add(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}
export function subtract(a, b) {
  return (BigInt(a) - BigInt(b)).toString();
}

export function mul(a, b) {
  return (BigInt(a) * BigInt(b)).toString();
}

export function potenz(a, b) {
  return (BigInt(a) ** BigInt(b)).toString();
}

export function divide(a, b) {
  return (BigInt(a) / BigInt(b)).toString();
}
