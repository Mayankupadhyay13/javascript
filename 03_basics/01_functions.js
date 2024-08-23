function myfun(number3,number4) {
    // console.log(`hello Function`)
    return number3+number4
}
myfun(2,3) // here mufun is ref.. and()this is execution of it

const fun = function(number1,number2){
    // console.log(`RAM RAM `)
    return number1+number2
}
let returnValue = fun(5,5)
// console.log(returnValue)

// console.log(typeof myfun)

// === proper way calling function and print the return value by function=========
function userLogedin (username){
    if(username === undefined){
        console.log(`please enter the username`)
        return
    }
    return `${username} is loged in now..`
}
// console.log(userLogedin())

//==========here is username is not given undefined will show ==========
// console.log(userLogedin(`hitesh`))


//=== ShopingCart problem adding values to cart========

function calculateCartPrice(...num1){
    return num1
}
//[ 199, 100, 2000, 300 ]
function calculateCartPrice(val1,val2, ...num1){ // rest/spread operator in js (...variableName),here rest in array spread
    return num1
}
//console.log(calculateCartPrice(199,100,2000,300))

//========= How to pass an object in function and how to use =================
const user ={
    userName:"hitesh",
    userId:123
}
function handleObject(anyObject){
    console.log(`${anyObject.userName} is my user and ${anyObject.userId} is userid..`)
}
//handleObject(user)

//passing object inside when calling the function...
handleObject({
    userName: "Hitesh",
    userId: 321
})

/* if the object has no (userid) then show (undefined), that's why type checking is there
 oR the Object we are passing is type is object or not..that's why typeScript is comes there ....*/

//============= passing arry in function=========
const arr = [100,200,300,400]
function arrfun(anyArray){
    return anyArray[1]
}
console.log(arrfun(arr))