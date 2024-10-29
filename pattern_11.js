/*
==================================
print 
0
1 0
0 1 0
1 0 1 0
0 1 0 1 0
==================================
*/

const nForest = function (n) {
    for(let i=0; i<n;i++){
        let line = "";
        let start = i % 2 == 0 ? 0 : 1;

        for(let j=0; j<=i; j++){
            line +=start + " ";
            start = 1-start
        }

        console.log(line)
    }
  };
  
  let rows = 5;
  nForest(rows);
  