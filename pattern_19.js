/*
==================================
print 
******
**  **
*    *
*    *
**  **
******
==================================
*/

const nForest = function (n) {
    let initialSpaces = 0;
    for (let i = 0; i < n; i++) {
      let line = "";

      for(let j=1; j<=(n-i); j++){
        line +="*"
      }

      for(let j=0; j<initialSpaces;j++){
        line +=" "
      }

      for(let j=1; j<=(n-i); j++){
        line +="*"
      }
      initialSpaces +=2;

      console.log(line);
    }

    initialSpaces = 2*n-2;
    for (let i = 1; i <=n; i++) {
        let line = "";
  
        for(let j=1; j<=i; j++){
          line +="*"
        }
  
        for(let j=0; j<initialSpaces;j++){
          line +=" "
        }
  
        for(let j=1; j<=i; j++){
          line +="*"
        }
        initialSpaces -=2;
  
        console.log(line);
      }
  
  };
  
  let rows = 5;
  nForest(rows);
  