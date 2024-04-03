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


// tricky operations
let number = 3;
let negNumber = -number;
console.log(negNumber);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 3);
console.log(2 + 3 + "1");

// prefix and postfix
let a = 10;
a++;
console.log(a++);

let b = 10;
++b;
console.log(b);

// seems like no changes here. But here is.. postfix basically returns value before incrementing. and prefix returns after incrementing the value

let x = 10;
let y = x++;
console.log(x, y); // 11 10

let s = 10;
let r = ++s;
console.log(s, r) // 11 11

