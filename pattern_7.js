/*
==================================
print 
            *
        *   *   *
    *   *   *   *   *
*   *   *   *   *   *   *
==================================
*/

const nForest = function(n){
    for(let i=0; i<n; i++){
        let line = "";

        //Left spaces
        for(let j=0; j<(n-i-1); j++){
            line +=" "
        }

        //stars
        for(let j=0; j< (2*i)+1; j++){
            line +="*"
        }

        //right spaces
        for(let j=0; j<(n-i-1); j++){
            line +=" "
        }

        console.log(line)
    }
}

let rows = 5;
nForest(rows)