let score = "29abc";

console.log(typeof score);
console.log(typeof(score));

let sc = Number(score);
console.log(typeof(sc));
console.log(sc); // NaN

/*
Number conversion:
"29" -> 29
"29abc" -> NaN
true -> 1, false -> 0 
*/


let isLoggedIn = "rakib";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
Either true or false
*/


let randomNumber = 32;
let convertToString = String(randomNumber);

console.log(typeof convertToString);
console.log(convertToString);