

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

/*
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



*/



// --------------------------------------- who check whether one property one attribute is present inside one object------------------
 /*
let person = {
    name : "Alice",
    age : 30
}

// to add a property you can do
person.class = 12;

person[hobby] ="chess";

// to delete a property you can do

delete person.name

// to check wheather a property is present or not

console.log(age in person); // log : true  as it is present
console.log( "name" in person) // it will log false

// the same thing can be done using hasOwnProperty method
console.log(person.hasOwnProperty("age")); // it will console true

// using undefined check
console.log(person.name !== undefined);

// using optional chaining
console.log(person?.name)

*/

/*
// --- this keyword related questions ----

function showThis() {
    console.log(this);
}

showThis();

// it will give you the reference of the global bject i.e window global object

const obj = {
    name: "Alice",
    showThis: function () {
        console.log(this.name);
    },
};

obj.showThis();

// Answer will be Alice

const obj2 = {
    name: "Bob",
    showThis: function () {
        console.log(this.name);
    },
};

const externalFunc = obj2.showThis;
externalFunc();

// it will give you undefine , because the showthis  attributes gives you a function and that function that this keyboard , and this keyboard will be reference to global, and inside the global name is not defined

const obj3 = {
    name: "Charlie",
    showThis: () => {
        console.log(this.name);
    },
};

obj3.showThis();

// here the object define is not done, so it is only excrating the functon and inside the function this keyword will indicate the global object and the name attribute in the global object is not defined. so it will give you undefined

*/

// ------------------------------

/*
// different types of loops in js
const fruits = ["apple", "banana", "mango"];

//  for loop
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// using for each method
fruits.forEach((fruit,i)=>{
    console.log(fruit);

}
)

// using for of loop
for( const fruit of fruits){
    console.log(fruit)
}

// using for in loop

for( const i in fruits){
    console.log(fruits[i]);
}

// using map method 
const allFruits = fruits.map((fruit,ind)=>{
    console.log(fruit)
})
allFruits;

// using while loop
let i =0; 
while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}

*/

// ------------------ array method in js-----------
/*
const fruits = ["apple", "banana", "orange"];

// to add an element inside an array from the back
fruits.push("mongo");

// to add an element inside an array from the front
fruits.unshift("jackFruit");

// to remove an element from an array from the front
fruits.shift();
// to remove an element from an array from the back
fruits.pop();

// adding/removing at specific index

fruits.splice(1,0,"kiwi");
// console.log(fruits);

const number = [1,2,3,4,5,6,7,8,9,10]
// filter method returns a new array with all the elements that pass the test
const evenNumber = number.filter((num)=>{
    return num % 2==0;
})
// console.log(evenNumber)
 // return the first elemtn that satisfies the condition
 const firstEvenNumber = number.find((num)=>{
    return num%2==0;
 })
 console.log(firstEvenNumber);
 
 const people = [
    { name : "alice", age:25},
    { name : "Bob", age:30},
    { name : "Charlie", age:35}
 ]
 const anyOver30 = people.some((person)=>{
    return person.age>=30;
 })
 // it will return true as one value is greater than equal to person age.

 const allOver20 = people.every((person)=>{
    return person.age>=20;
 })

 // spreading arrays
 const arr1 = [1,2,3];
 const arr2 = [4,5,6];
 const combined = [...arr1, ...arr2];
 console.log(combined);
 // spreading of string

 const str = "hello";
 const chars = [...str];
 console.log(chars);

 */

 // some output based questions

 /*
 myfun()

 var myfun= function (){
    console.log("first");
 }
 myfun();
 function myfun (){
    console.log("second");
 }
 myfun();

 // second frist first
 */

 /*
 var variable =10;
 (()=>{
    console.log(variable);
    variable = 20;
    console.log(variable);
 })();
 console.log(variable);
 var variable=30;

 // 10 20 20
 */

 /*
foo = 30;
console.log("FOO",foo);
var foo= 100;
console.log("FOO", foo);

// 30 100
*/
/*
const piyush = {
    name:"Piyush Garg",
    sayName: function (){
        console.log(this.name);
    }
}

setTimeout(piyush.sayName.bind(piyush),3*1000);
// here bind keyword helps to bind a value to a object reference, in general setTimeout forget its reference

*/
const obj ={
    height: 30
};
console.log(obj.height);
delete obj.height;
console.log(obj.height);
//it will give 30 undefined

//  here if you use obj = Object.create({}) in this all the data memebers are created inside a prototype and delete keyword doesn't work on prototype