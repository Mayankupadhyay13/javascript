// Singleton
//Object.create()

//  here show howto use symbol as Key..in Object.....
const sym = Symbol("key1")
const obj = {
    name:'Mayank',
    [sym]:"key1", //symbol
    'fullname' :'Mayank Upadhyay',
    age:20,
    id:170,
    email:'mayank12@gmail.com',
    idLoggedIn: false,
    lastLoginDays:['maonday','saturday'],
    location:'Noida'

}
// console.log(obj.fullname)
// console.log(typeof fullname)
// console.log(obj["email"]) //another way to get the element of obj
// console.log(obj[sym])
// how to freez the obj to unable to change anything..

obj.email = 'mayank@17google.com' //updated
//Object.freeze(obj)
obj.age = 23    //not update
//console.log(obj)

obj.greeting = function(){
    console.log(`hello obj user ${this.age} `)
}
// console.log(obj.greeting) if this => [Function (anonymous)] ref..
console.log(obj.greeting())//=>hello obj user 23 