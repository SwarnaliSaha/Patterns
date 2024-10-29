/*
==================================
print 
*    *
**  **
******
**  **
*    *
==================================
*/

const nForest = function (n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let line = "";
    let stars = i;
    if (i > n) stars = 2 * n - i;

    //stars
    for (let j = 1; j <= stars; j++) {
      line += "*";
    }

    //space
    let initialSpaces = 2*(n-stars);
    for (let j = 1; j <= initialSpaces; j++) {
      line += " ";
    }

    //stars
    for (let j = 1; j <= stars; j++) {
      line += "*";
    }

    console.log(line);
  }
};

let rows = 5;
nForest(rows);
