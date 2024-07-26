const fs = require("fs");

fs.readFile(`${__dirname}/data.txt`, "utf-8", (err, data) => {
  let data1 = data.split("\n");
  //   `$ cd /
  // $ ls
  // dir a
  // 14848514 b.txt
  // 8504156 c.dat
  // dir d
  // $ cd a
  // $ ls
  // dir e
  // 29116 f
  // 2557 g
  // 62596 h.lst
  // $ cd e
  // $ ls
  // 584 i
  // $ cd ..
  // $ cd ..
  // $ cd d
  // $ ls
  // 4060174 j
  // 8033020 d.log
  // 5626152 d.ext
  // 7214296 k
  // dir a
  // $ cd a
  // $ ls
  // 1000 s
  // dir p`.split("\n");
  const obj = {};
  let upp = "";
  let curr = "";
  let sum = 0;
  let highSum = 0;
  let con = 0;
  for (let i = 0; i < data1.length; i++) {
    con++;
    let cmd = data1[i];
    upp = curr;
    let splitCmd = cmd.split(" ");
    if (cmd.startsWith("$ cd") && !cmd.endsWith("..")) {
      sum++;
      if (sum > highSum) highSum = sum;
      curr = splitCmd[splitCmd.length - 1];
      if (obj[curr]) {
        curr = curr + con;
        obj[curr] = {};
        obj[curr].prev = upp;
        obj[curr].cnt = {};
        obj[curr].count = 0;
        obj[curr].sum = sum;
      } else {
        obj[curr] = {};
        obj[curr].prev = upp;
        obj[curr].cnt = {};
        obj[curr].count = 0;
        obj[curr].sum = sum;
      }
    } else if (cmd.startsWith("dir")) {
      obj[curr].cnt[splitCmd[splitCmd.length - 1]] = "dir";
    } else if (splitCmd[0].match(/[1-9]/)) {
      obj[curr].cnt[splitCmd[1]] = splitCmd[0];
    } else if (cmd === "$ cd ..") {
      sum--;
      curr = obj[curr].prev;
    }
  }

  function recur(obj, key, c) {
    for (let k in obj[key].cnt) {
      if (obj[key].cnt[k].match(/[0-9]/)) {
        c += Number(obj[key].cnt[k]);
        obj[key].count = c;
      }
    }
  }
  for (let key in obj) {
    let c = 0;
    recur(obj, key, c);
  }

  function l(obj2, highSum) {
    if (obj2.prev && obj2.sum === highSum) {
      obj[obj2.prev].count += obj2.count;
    }
  }

  for (let i = highSum; i >= 0; i--) {
    if (highSum === i) {
      for (let j in obj) {
        l(obj[j], highSum);
      }
    }
    highSum--;
  }
  let result = 297911400;
  let count2 = 0;
  for (let p in obj) {
    if (obj[p].count <= 100000) {
      count2 += obj[p].count;
    }
    if (obj[p].count < result && obj[p].count >= 208860) {
      result = obj[p].count;
    }
  }
  console.log(result);
  console.log(count2);
});
