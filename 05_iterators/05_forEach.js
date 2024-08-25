const course = ['js','cpp','java','py','react']
// for-Each loop

// course.forEach( function (items) {
//     console.log(items)
// })

//============ for - Each with arrow_fun =================

//course.forEach( (items) => { console.log(items)})

function same (items) {
    console.log(items);
    
}
//course.forEach(same)

const mycourse = [
    {
        myname:'Mayank',
        id:12
    },
    {
        myname:'hitesh',
        id:13
    },
    {
        myname:'katrina jade',
        id:100
    }
]
mycourse.forEach((items)=>{
    //console.log(items.myname)
})

//=========== making return from for-each loop=============

const values = course.forEach((items) => {
    console.log(items);
    return items
})
console.log(values)     // no return here, undefined..

// filter for return something in loop
const mynum = [1,2,3,4,5,6,7,8,9]
const newNums = mynum.filter((num)=> (num> 5))
//console.log(newNums);

// if we want to return in for-each needs to create new array
const newarr = []
mynum.forEach((num)=>{
    if(num>4){
        newarr.push(num)
        console.log(newarr)
    }
} ) 
//console.log(newarr)

 