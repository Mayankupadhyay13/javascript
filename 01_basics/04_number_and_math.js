const num = 100// here js auto-detect that type should be number for this..
console.log(num)
const num2 = new Number(10)// this will create 100% number type ..becz number object is creating..
console.log(num2)

console.log(num2.toString().length)
console.log(num.toFixed(2))
const pre = 123.323
console.log(pre.toPrecision(3))// gives the presice value 

const val = 10000000
console.log(val.toLocaleString('en-IN'));

//=================Maths==================
console.log(Math) // object [math] {}->has lots of properties


