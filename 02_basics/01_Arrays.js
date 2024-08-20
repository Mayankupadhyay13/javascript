//===============arrays =============
const arr = [3,4,2,5,6,9,7,"mayank",null,true,]
// console.log(arr)

/* 
-> can have mix types as (string,number,objects,arr itself)
-> array is object that contain collections of multiple items in single variable
    javaScript Arrays are not fixed size as others(resizable)
->js arrays-copy operation creates (shallow copies) rather then (deep copies)
->shallow copy of an object is the copy,whose share the same reference point just as in heap memory 
*/
const arr2 = ["shaktiman","dhoom2","babakachamatkar"]
const arr3 = new Array(1,2,3,5,6)
// ==========arrays methods==============
// arr2.push("mayank")
// arr2.push("bhaikatora")
// arr2.pop()// delete last element from array...

 //console.log(arr2)
//  arr3.unshift(10)
//  arr3.unshift(20)    //add at start in array
//  arr3.shift()        //remove from start in array
// console.log(arr3.includes(9))
// console.log(arr3.indexOf(10))

let join =  arr2.join() // convert array to string..
// console.log(join)
// console.log(arr3)
 
console.log("A", arr3)
let myn1 = arr3.slice(1,3)//  gives the copy of the value
console.log(myn1)
console.log("B",arr3)

let myn2 = arr3.splice(1,3)// delete the value 
console.log(myn2)
console.log('c',arr3)
