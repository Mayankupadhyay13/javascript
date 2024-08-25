//=================== filter() ======================
const books = [
    {title:'BOOk 1', genre:'History',publish: 2001},
    {title:'BOOk 2', genre:'Science',publish : 2000},
    {title:'BOOk 3', genre:'Science',publish:1999},
    {title:'BOOk 4', genre:'Maths',  publish:2004},
    {title:'BOOk 5', genre:'History',publish:1998},
    {title:'BOOk 6', genre:'Maths',  publish:1996},
    {title:'BOOk 7', genre:'History',publish:2000},
    {title:'BOOk 8', genre:'Science',publish:1997}    
]
let newbk = books.filter((bk)=> (bk.genre === 'History'))
//console.log(newbk)
newbk = books.filter((bk)=> {return bk.publish >2000 })
//console.log(newbk);

//=========== Map() ============================

const arr = [1,2,3,4,5,6]
let newarr = arr.map((num)=> num+10) // its auto return the value 
console.log(newarr)

//=========== chaining with map/filter============
newarr = arr.map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=>num>=40)
console.log(newarr)

//========== Array.reduce()=====================
const arr1 = [1,2,3]

let a = arr1.reduce(function(accumulator, currentvalue){
    console.log(`acc: ${accumulator} and curretval: ${currentvalue}`)
    return accumulator+currentvalue
},0)
console.log(a)

let b = arr1.reduce((acc,curval)=> acc+curval,0)
console.log(b)

const arrobj = [
    {courseName: 'js course',price:2999},
    {courseName: 'python course',price:1999},
    {courseName: 'cpp course',price:999},
    {courseName: 'React course',price:3999},
    {courseName: 'Mobile dev course',price:12999},
    
]
let coursePrice = arrobj.reduce((acc , item)=>acc + item.price ,0)
console.log(coursePrice)
