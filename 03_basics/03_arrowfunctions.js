const user ={
    username: 'hitesh',
    userid:123,
    isusrelogedin:function(){
        console.log(`${this.username} , welcome user ${this.userid} to wesite..`)
        console.log(this)
    }
}
// user.isusrelogedin()
// user.username = "sam" // this change the current context of the object 
// user.isusrelogedin()

//console.log(this) checking global context..

/*
=>imp
 here {} is ouput an empty obj bcz global is nothing runnig with node..,
but in console output for global is window*/

// function chai(){
//     let username = 'hitesh
//     console.log(this.username) undefined not work for this in functions
// }                            
// chai()

//=======Arrow function========
const chai = () => {
    let username = "hitesh"
    // console.log(this.username)
}

() => {}  // this is an arrow fun

let arrowfun = (num1,num2) =>{
    return num1+num2
}
// console.log(arrowfun(3,4))

const fun = (num1,num2)=> num1+num2        // using without return keyword
//          or/same
const fun2 = (num1,num2)=>  (num1+num2 )
//          or/ passing object as parameter..
const fun3 = () => ({usrename:"hitesh"})
 console.log(fun3())

