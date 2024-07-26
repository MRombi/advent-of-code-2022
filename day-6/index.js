const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  let data1 = data;
  let arr = [];
  const arr2 = [];

  for (let i = 0; i < data1.length; i++) {
    if (arr.length === 14) break;
    else if (arr.includes(data1[i])) {
      arr = arr.slice(arr.indexOf(data1[i]) + 1);
      arr.push(data1[i]);
      arr2.push(i);
    } else if (!arr.includes(data1[i])) {
      arr.push(data1[i]);
      arr2.push(i);
    }
  }
  console.log(arr2[arr2.length - 1] + 1);
});
