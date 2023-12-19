import cypherNums from "./0059_cipher.json" assert { type: "json" };

// console.log(cypherNums);

let text = "";
for (let n of cypherNums) text += String.fromCharCode(n);

console.log(text[0]);
