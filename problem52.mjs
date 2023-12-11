function gsd(n, m) {
  const arr = Array(m)
    .fill(0)
    .map((e, i) => (i + 1) * n);
  return arr.every(
    (e) =>
      e
        .toString()
        .split("")
        .sort((a, b) => a - b)
        .join("") ==
      n
        .toString()
        .split("")
        .sort((a, b) => a - b)
        .join("")
  );
}

for (let i = 1; ; i++) {
  if (gsd(i, 6)) {
    console.log(i);
    break;
  }
}
