let thousand = "+(+!+[]+[]+ +[]+ +[]+ +[])";

const FalseStr = "!!+[]";
const TrueStr = "!+[]";
const UndefinedStr = "[][+[]]";
const InfinityStr = "(+(+!+[]+(!!+[]+[])[+!+[]+!+[]+!+[]+!+[]]+(+!+[]+[]+ +[]+ +[]+ +[]))+[])";

function numStr(n) {
  return "+!+[]".repeat(n) || "+[]";
}
function toString(exp) {
  return "(" + exp + "+[]" + ")";
}

const map = {
  a: toString(FalseStr) + "[" + numStr(1) + "]",
  b: "",
  c: "([][(!!+[]+[])[+[]]+([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
  d: "([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
  e: "(!!+[]+[])[+!+[]+!+[]+!+[]+!+[]]",
  f: "(!!+[]+[])[+[]]",
  g: "",
  h: "",
  i: "([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]]",
  j: "",
  k: "",
  l: "(!!+[]+[])[+!+[]+!+[]]",
  m: "",
  n: "([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
  o: "",
  p: "",
  q: "",
  r: "(!+[]+[])[+!+[]]",
  s: "(!!+[]+[])[+!+[]+!+[]+!+[]]",
  t: "(!+[]+[])[+[]]",
  u: "(!+[]+[])[+!+[]+!+[]]",
  v: "",
  w: "",
  x: "",
  y: InfinityStr + "[" + numStr(7) + "]",
  z: "",
  I: InfinityStr + "[+[]]",
  "{": "([][(!!+[]+[])[+[]]+([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([][+[]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]]+[])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
};
const FunctionFindStr = "[][" + map.f + "+" + map.i + "+" + map.n + "+" + map.d + "]" + "+[]";

log("([][" + map.f + "+" + map.i + "+" + map.n + "+" + map.d + "]" + "+[])" + "[" + numStr(32) + "]");

function log(exp) {
  console.log({ exp, val: eval(exp) });
}
