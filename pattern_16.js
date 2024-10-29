/*
==================================
print 
A
B B
C C C
D D D D 
E E E E E
==================================
*/

const nForest = function (n) {
    for(let i=0; i<n; i++){
        let line = "";

        for(let j=0; j<=i; j++){
            line +=String.fromCharCode(65+i) + " "
        }
        console.log(line)
    }
  };
  
  let rows = 5;
  nForest(rows);
  