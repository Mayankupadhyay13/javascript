// if statement..

/*comparison operators 
 <, >, <=, >=, ==,!=, ===, !== */

const temerature = 41
if(temerature < 41){
    console.log(`jane meri janemaan`)
} else {
    console.log(`no code`)
 }
 //console.log(`hello code`)

// let score = 200
// if(score>100){
//     let power = "fly"
//     var power1 = "fly"  // Not recommended gives global scope polution....
//     console.log(`user power : ${power}`)
// }
// console.log(`user power : ${power1}`) //  accessiable here ,Not recommended gives global scope polution....

if(true){

}else if(true){

}else {

}

const userlogedin = true
const debitcard = true
const logedinwithemail = true
if(userlogedin && debitcard){
    console.log(`hello user`)
}

if( userlogedin || logedinwithemail){
    console.log(`user loged in..`)
}