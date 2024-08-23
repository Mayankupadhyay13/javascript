// let a = 10
// const b = 20         //global scope
// var c = 30
if (true){
    let a = 10.33
    const b =20.20      // local scope
    var c = 30.10
}
// console.log(a)
// console.log(b)
console.log(c)
/* var variable is accessiable inside local scope and can change the value of globle variable*/
/* 
=>IMP  
here is some differnce b/w (node scope )and windows scope(inspect console with keyword in DOM topic)
when we run code */

//=== Nested scope and Taking about clousers in javascript (to usnderstand this DOM is rescommended)===
function one(){
    const username = "Jamaluuu Singh"
    function two(){
        const learningTutorials = "Youtube"
        console.log(username)
    }
    //console.log(learningTutorials)   not accessiable..
    two()
}
one()