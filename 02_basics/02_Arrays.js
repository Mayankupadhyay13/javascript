const heros = ['super','batmen','spide']
const men = ['dholu','bholu','chomu']
// heros.push(men)
// console.log(heros)

const all = heros.concat(men)
//console.log(all)
const sprd = [...heros,...men]//using spread operator..
// console.log(sprd)

const nai_array = [1,2,[3,4,5],34,[2,3,[7,8,89]]]
let arr2 = nai_array.flat(Infinity)
//console.log(arr2)

console.log(Array.isArray('mayank'))
console.log(Array.from('mayank'))
console.log(Array.from({name:'mayank'})) // return object becz dont now to which type key /value .

let a = 100
let b= 200
let c = 300
console.log(Array.of(a,b,c))