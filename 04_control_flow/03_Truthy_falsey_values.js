const useremail = []

if(useremail){
    console.log(`Got the user email`)
}else{
    console.log(`Not have any user email`)
}

/*==== falsey values==
    false , 0, -0, BigInt 0n, "", null, undefined ,NaN

=======Truthy Values ============
    "0", "false", " ", [], {}, function(){}     */

if(useremail.length === 0){
    console.log(`array is empty`) // for checking array is empty or not
}    

const obj = {}
if(Object.keys(obj).length === 0){
    console.log(`Object is empty`)
}

false == 0 // true
false == ''//true
0 == '' //true

/* Nullish_coalescing_Operator (??) : for (null , undefined )

This operator is basicaly fall back for handling error assign null/undefined if nothing..
to handle further situation*/

let val ;
//val = 5 ?? 10 // 5
// val = null ?? 10 //10 , here another func to data base conn will return 10 //checks safety for null value  
// val = undefined ?? 15 //15 
val = null ?? 10 ?? 20
console.log(val);

// Terniary Operator ?
// condition ? true : false
