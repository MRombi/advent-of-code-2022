const fs = require("fs");

const lookup = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};
fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  const arr = [];
  let count = 0;
  let count2 = 0;
  const data1 = data.split("\n");
  for (let d of data1) {
    let part1 = d.substring(0, d.length / 2);
    let part2 = d.substring(d.length / 2);

    for (let char of part1) {
      if (part2.includes(char)) {
        count += lookup[char];
        break;
      }
    }
  }
  for (let i = 0; i < data1.length; i += 3) {
    for (char of data1[i]) {
      if (data1[i + 1].includes(char) && data1[i + 2].includes(char)) {
        count2 += lookup[char];
        break;
      }
    }
  }
  console.log(count);
  console.log(count2);
});
