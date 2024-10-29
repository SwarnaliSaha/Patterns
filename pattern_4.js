/*
==================================
print 
1
22
333
4444
55555
==================================
*/

const nForest = function(n){
    for(let i=0; i<n; i++){
        let line = "";
        for(let j=0; j<=i; j++){
            line +=`${i+1}`
        }
        console.log(line)
    }
}

let rows = 5;
nForest(rows)