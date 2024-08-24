// ========== for-in loop =========

//with objects
const obj = {
    js:'jsvaScript',
    rb:'ruby',
    cpp:'c++'       // for-in loop is good for objects 
}
for (const key  in obj) {
   //console.log(key,obj[key]);
   //console.log(`${key} : ${obj[key]}`);
}

// checking with array

const arr = ['js','cpp','java','py']
for (const key in arr) {
    console.log(arr[key]);       // Gives arrays keys..(0,1,2,3,4,5)
    
}

// As of end  (for-in for obj)
// and        (for-of for array)