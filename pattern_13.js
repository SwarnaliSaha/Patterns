/*
==================================
print 
1
2 3
4 5 6
7 8 9
10 11 12
==================================
*/

const nForest = function (n) {
    let count = 1;

    for(let i=1; i<=n; i++){
        let line = "";

        for(let j=1; j<=i; j++){
            line +=count + " ";
            count++
        }
        console.log(line)
    }
  };
  
  let rows = 5;
  nForest(rows);
  