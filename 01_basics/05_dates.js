let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
//console.log(typeof mydate)// object..

let mdate  = new Date(2024,0,3); 
//console.log(mdate)// 2024-01-03T00:00:00.000Z ...months starts with zero in jacaScript..dates
let dt = new Date(2024,0,3,5,6); // gives time also 5,6
//console.log(dt)
let dtee= new Date("2024-01-12") // in (yy-mm-dd) or (mm-dd-yy in india)
//console.log(dtee)
//console.log(dtee.toLocaleString())
//========================how to add timeStamp===========
let myStamp = Date.now()
// console.log(myStamp) //1724166736756// form 01-jan-1970..
// console.log(dtee.getTime()) //1705017600000 in miliSecond's now we compare these two
// console.log(Math.floor(Date.now()/1000)) // gies in Second's

let date = new Date()
// console.log(date)
// console.log(date.getDate())
// console.log(date.getMonth()+1)

// dtee.toLocaleString()

/*here this method is interesting because in this we define an object i parameter..
used to more customize the format of date....*/
        
date.toLocaleString('default',{
    weekday:"long"

})
console.log(date)
let date1 = new Date()

const localDateString = date1.toLocaleString();
console.log(localDateString);

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const formattedDate = date.toLocaleString('en-US', options);
// console.log(formattedDate);


