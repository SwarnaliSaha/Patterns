/*
==================================
print 
12345
1234
123
12
1
==================================
*/

const nForest = function(n){
    for(let i=n; i>0; i--){
        let line = "";
        for(let j=0; j<i;j++){
            line +=`${j+1}`
        }
        console.log(line)
    }
}

let rows = 5;
nForest(rows)