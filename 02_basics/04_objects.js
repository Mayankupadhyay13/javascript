// const user = new Object() same as below ..
const user = {}
user.name = 'Sher Singh'
user.id= 10
user.email= 'sher@gmail.com'
user.idLogedIn = true
//console.log(user)

// basics till now ,
//========Here Objects has Object==========
const user2 = new Object()
user2.email= 'xyz@gmail.com'
user2.fullname = {
    id: 11,
    userFullName:{
        firstName: 'Sherr',
        lastName: 'Singh'
    }
}
// console.log(user2) // whole objects 
// console.log(user2.fullname.userFullName.firstName) //sher

let obj = {1:'a',2:'b'}
let obj2 = {3:'c',4:'d'}
//console.log({obj,obj2})   // asign object inside object

//console.log(Object.assign({},obj,obj2))
 // here in parameter target and source (target is {} )and (source are obj,obj2)
 // which copy all sources to target and print target ...

//console.log({...obj,...obj2})

//======= when Arrays has objects as elements ============
const us = [
    {
        id:1,
        name:'sheer'
    },
    {
        id:2,
        name:'cheeta'
    },
    {
        id:3,
        name:'Rande'
    }
]
// console.log(us[1].name)
// console.log(user)
// console.log(Object.keys(user))// print in array format
// console.log(Object.values(user)) 
// console.log(Object.entries(user)) //print array in array
// console.log(user.hasOwnProperty('id'))// to key exists..

//=========== Destructuring of objects (concept used in React)=============
const course  = {
    courseName: "JavaScript",
    price : 999,
    CourceInstructor: "Hitesh choudhry"
}
//console.log(course.courseName)  // old 

// Destructuring the  object....
const {courseName,price} = course
console.log(courseName,price)

const {courseName: Cname} = course
console.log(Cname)

//========= JSON api data form ========
/*
{
    "name":"user",
    "id":123,
    "node_id":"MFY5GH78HJGS"

}
    SonTimes api data is also in [] array form
    [
        {},{},{}    // objects
    ]
  Here we need to Know how to use JavaScript (fetch) method to get (api dta) which is (json form)
   and then convert into object and then get the data using object methods or dot notataions ... */

