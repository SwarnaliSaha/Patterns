/*
==================================
print 
*   *   *   *   *   *   *           
    *   *   *   *   *
        *   *   *   
            *   
==================================
*/

const nForest = function(n){
    for(let i=n; i>0; i--){
        let line = "";

        //Left spaces
        for(let j=0; j<=(n-i); j++){
            line +=" "
        }

        //stars
        for(let j=0; j< (2*i)-1; j++){
            line +="*"
        }

        //right spaces
        for(let j=0; j<=(n-i); j++){
            line +=" "
        }

        console.log(line)
    }
}

let rows = 5;
nForest(rows)