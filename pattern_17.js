/*
==================================
print 
         A
        ABA
       ABCBA
      ABCDCBA
==================================
*/

const nForest = function (n) {
  for (let i = 0; i < n; i++) {
    let line = "";

    //Left-space
    for (let j = 0; j < n - i - 1; j++) {
      line += " ";
    }

    //Letters
    let currentChar = "A";
    for (let j = 0; j < 2 * i + 1; j++) {
      line += currentChar;
      if (j < i) {
        currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
      } else {
        currentChar = String.fromCharCode(currentChar.charCodeAt(0) - 1);
      }
    }

    //Right-space
    for (let j = 0; j < n - i - 1; j++) {
      line += " ";
    }

    console.log(line);
  }
};

let rows = 5;
nForest(rows);
