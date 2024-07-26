const fs = require("fs");

fs.readFile(`${__dirname}/data.txt`, "utf-8", (err, data) => {
  let data1 = `30373
25512
65332
33549
35390`.split("\n");
  console.log(data1);
});
