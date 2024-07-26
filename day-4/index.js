const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  const data1 = data.split("\n");
  const arr = data1.map((num) => num.split(","));
  let count = 0;
  let count2 = 0;

  for (let s of arr) {
    let first1 = Number(s[0].split("-")[0]),
      first2 = Number(s[1].split("-")[0]);
    let sec1 = Number(s[0].split("-")[1]),
      sec2 = Number(s[1].split("-")[1]);

    first1 <= first2 && sec1 >= sec2
      ? count++
      : first1 >= first2 && sec1 <= sec2
      ? count++
      : null;

    if (sec1 >= first2 && sec1 <= sec2) count2++;
    else if (sec2 >= first1 && sec2 <= sec1) count2++;
  }

  console.log(count);
  console.log(count2);
});
