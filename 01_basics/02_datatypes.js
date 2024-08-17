// primitives Data Types Js..  (call by value (copy of value))..
let num = 100
    console.log(num)

let str = "Love programming"
    console.log(typeof str)

let id = Symbol("mayank")
let id2 = Symbol(100)
    console.log(id===id2)// symbol type's return type also symbol..
    console.log(typeof (id))

const myjob = 89893829832983928398398397878787878787191981983188n //bigInt varialbe ..
    console.log(typeof myjob)

let bool = true
console.log(bool )
console.log(typeof bool)

let null_ex = null
let variable ;

console.log(typeof variable)

// reference ( non-primitives datatypes ..)
//1. Arrays
const arr = [100,10,29,2,3,12]

//2. Objects 
let obj = {
    email: "msus123@gmail.com",
    id : 1
}
// 3. functions 
const fun = function(){
    console.log("heloo world")// function run when call
}
console.log(fun)