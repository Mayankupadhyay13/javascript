// ........Immediately Invoked Function Expressions ..........
/*
Here we (use iife) for protecting global scpe polution 
to remove the global scope/variable we use iife.....
and to run immediately the function */ 

(function fun(){
    //named iife
    console.log(`hello log`)
})();       /*here iife dont Know where to stop the context that's why use ; in last */

// fun()

const abc = function(){
    console.log(`ram ram jii`)
}();//iife 


(()=>{
    console.log(`hello log 2`)
})();

((name)=>{
    console.log(`hello log 2 ${name}`)
})('hitesh')
