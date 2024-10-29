/*
==================================
print 
1
12
123
1234
12345
==================================
*/

const nForest = function(n){
    for(let i=0; i<n; i++){
        let line = "";
        for(let j=0; j<=i; j++){
            line +=`${j+1}`
        }
        console.log(line)
    }
}

let rows = 5;
nForest(rows)