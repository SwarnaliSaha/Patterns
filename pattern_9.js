/*
==================================
print 
            *
        *   *   *
    *   *   *   *   *
*   *   *   *   *   *   *
*   *   *   *   *   *   *           
    *   *   *   *   *
        *   *   *   
            *   
==================================
*/

//Upper Pattern
const nForestUpper = function(n){
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

//Lower Pattern
const nForestLower = function(n){
    for(let i=0; i<n; i++){
        let line = "";

        //Left spaces
        for(let j=0; j<i; j++){
            line +=" "
        }

        //stars
        for(let j=0; j< 2*n -(2*i +1); j++){
            line +="*"
        }

        //right spaces
        for(let j=0; j<i; j++){
            line +=" "
        }

        console.log(line)
    }
}

let rows = 5;
nForestUpper(rows)
nForestLower(rows)