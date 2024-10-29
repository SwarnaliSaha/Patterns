/*
==================================
print 
A B C D E
A B C D
A B C
A B
A
==================================
*/

const nForest = function (n) {
    for(let i=n; i>=1; i--){
        let line = "";

        for(let j=0; j<i; j++){
            line +=String.fromCharCode(65+j) + " "
        }
        console.log(line)
    }
  };
  
  let rows = 5;
  nForest(rows);
  