/*
==================================
print 
****
****
****
****
==================================
*/

const nForest = function(n){
    for(let i=0; i<n; i++){
        let line = "";
        for(let j=0; j<n; j++){
            line +="* "
        }
        console.log(line)
    }
}

let rows = 4;
nForest(rows)