const fs = require("fs");

/*A rock Y paper
B paper X rock 
C scissors Z scissors 

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).

In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).

The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.

In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).
*/

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) console.log(err);

  const scores = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
  };

  const s = data.split("\n");
  let count = 0;
  for (let char of s) {
    count += scores[char];
  }
  console.log(count);
});
