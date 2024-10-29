/*
==================================
print 
1      1
12    21
123  321
12344321
==================================
*/

const nForest = function (n) {
    for(let i=1; i<=n; i++){
        let line = "";

        //Left Numbers
        for(let j=1; j<=i; j++){
            line +=j
        }

        //spaces
        for(let j=1; j<=2*(n-i); j++){
            line +=" "
        }

        //Right Numbers
        for(let j=i; j>=1; j--){
            line +=j
        }

        console.log(line)
    }
  };
  
  let rows = 5;
  nForest(rows);
  