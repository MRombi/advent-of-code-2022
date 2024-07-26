const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) console.log(err);

  const arr = [];
  const arr2 = [];
  let count = 0;
  const s = data.split("\n");

  for (let nums of s) {
    arr.push(Number(nums));
  }
  for (let num of arr) {
    if (num !== 0) count += num;
    else {
      arr2.push(count);
      count = 0;
    }
  }
  const l = arr2.sort((a, b) => b - a);
  console.log(l[0] + l[1] + l[2]);
});
