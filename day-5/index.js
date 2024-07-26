const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  const data2 = data.split("\n").slice(0, 8);
  const data1 = data.split("\n").slice(10);
  let letters = "";

  const obj = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  const indexObj = {
    33: 9,
    29: 8,
    25: 7,
    21: 6,
    17: 5,
    13: 4,
    9: 3,
    5: 2,
    1: 1,
  };

  for (let i = data2.length - 1; i > -1; i--) {
    for (let j = 0; j < data2[i].length; j++) {
      if (data2[i][j].match(/[A-Z]/)) {
        obj[indexObj[j]].push(data2[i][j]);
      }
    }
  }

  for (let x of data1) {
    const num = x.split(" ")[1],
      init = x.split(" ")[3],
      end = x.split(" ")[5];
    let letterArr = obj[init].splice(obj[init].length - num);
    obj[end].push(...letterArr);

    // for (let i = 0; i < num; i++) {
    //   obj[end].push(obj[init].pop());
    // }
  }

  for (let key in obj) {
    letters += obj[key][obj[key].length - 1];
  }
  console.log(letters);
});
