// ===== for_of loop =============
let arr = [1,2,3,4,5]

// for (const element of object) { 

   // here (element) is variable and (object) referces to where we apply arr/obj/string
    
// }

// for (const element of arr) {
//     console.log(element);
    
// }

let greetings = "hello hitesh bhai"
// for (const greet of greetings) {
//     console.log(greet);
    
// }

//========== Maps =======
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set("Fr","France")
map.set("IN","India")// not done bcz map works form unique values in js and maitain order

//console.log(map);

for (const [xc,cx] of map) {

    //console.log(xc,':-',cx);
    
}
//============== for_of with object ===========

// let obj ={
//     username: 'hitesh',
//     userid: 123
// }
// for (const x of obj) {  // obj is not iterable for (for_of loop )...
//     console.log(x);
    
// }