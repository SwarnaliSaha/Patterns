/*
==================================
print 
E
DE
CDE
BCDE
ABCDE
==================================
*/

const nForest = function (n) {
    for (let i = 0; i < n; i++) {
      let line = "";
      let char = "A";
      char = String.fromCharCode(char.charCodeAt(0) + (n-i-1));

      for(let j=0; j<=i; j++){
        line +=char;
        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }

      console.log(line);
    }
  };
  
  let rows = 5;
  nForest(rows);
  