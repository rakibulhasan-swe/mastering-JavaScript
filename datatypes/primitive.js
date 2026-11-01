"use strict" // treat all JS code as newer version

// primitive
// 7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive) -> Array, Object, functions

const score = 100;
const score1 = 100.43;

const isLoggedIn = true;
const outSideTemp = null;

let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id===anotherId); // false - value same 


let phoneNumber = 1749006471;
console.log(typeof phoneNumber); // number

// NaN - not a number
let notANumber = 0/0;
console.log(notANumber);

console.log(typeof NaN);

let name = "Rakib";
console.log(typeof(name)); // string

const isAdmin = true;
console.log(typeof isAdmin); // boolean

let something;
console.log(typeof something); // undefined

const userId = null;
console.log(typeof userId); // object

/* 

7 primitive types of data in js: aka call by value

Number -> any type of number.
NaN -> Not a number.
BigInt --
String -> any type of values inside double quotes or single quotes.
Boolean -> either true or false.
undefined -> variables declared but never assigned any value.
null -> special type of value.
Symbol -> 
*/