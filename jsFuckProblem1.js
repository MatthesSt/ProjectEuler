let thousand = +(+!+[] + [] + +[] + +[] + +[]);
let three = numStr(3);

function numStr(n) {
  return "+!+[]".repeat(n) || "+[]";
}

console.log(three);
