/*
==================================
print 
A
A B
A B C
A B C D
A B C D E
==================================
*/

const nForest = function (n) {
    for(let i=1; i<=n; i++){
        let line = "";

        for(let j=0; j<i; j++){
            line +=String.fromCharCode(65+j) + " "
        }
        console.log(line)
    }
  };
  
  let rows = 5;
  nForest(rows);
  