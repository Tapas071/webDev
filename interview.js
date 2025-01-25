

// console.log("hello world");

// closure in javascript

// for( var i =0; i< 3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }
// //  log - 3, 3 ,3
// for( let i =0; i< 3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }
//  log - 0,1,2 with 1 sec interval

// using closure
// for( var i=0;i<3;i++){
//     function fn(i){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
//     fn(i);
// }
// log -> 0, 1, 2

// private counter in javascript

// function counter ( ){
// var _counter=0;
// function add (increment){
//     _counter += increment;
// }
// function retrieve(){

//     return "counter value is -> "+ _counter;
// }
// return {
//     add ,
//     retrieve,
// };
// }

// var ct = counter();
// ct.add(10);
// ct.add(5);
// console.log(ct.retrieve());

/*
let view;
function likethevideo() {
    view = "something";
    console.log("subscribe to ", view);

}
likethevideo();

*/

/*
// question: impement Caching/ Memoize function

//  i have left it because it was confusing

const clumsySquare = ( num1, num2)=>{
    for( let i=1;i<=1000000;i++){

    }
    return num1 + num2;
}

// console.time("first call")
console.log(memoizeSquare());
// console.time("second call")

 */

// currying: series of function-> when one function take one argument and return  a function which takes argument  and the chain may proceed futher. This technique is called curring

function sum ( a ){
    return function sum(b){
        return a+b;
    }
}
// here is one more example with fat arrow function
// const sum = ( a )=> (b) => a+b;
console.log(sum(2)(3))

function mul ( a ){
    return function mul ( b, c){
        return a *b*c;
    }
}
console.log(mul(2)(2,4));

// how to make any function a currying function

function curry( func){
    return function curriedFunc(...arg){
        if(arguments.length >= func.length)return func(...arg);
        else {
            return function(...next){
                return curriedFunc(...arg, ...next);
            }
        }
    }
}


