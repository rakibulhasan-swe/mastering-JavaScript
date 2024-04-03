console.log(null > 0); // returns false
console.log(null == 0); // returns false 
console.log(null >= 0); // returns true. bcz == and comaprison works differently. in comparison null converts to 0.


console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
// all cases are false

console.log("2" > 1);
console.log("02" > 1);
// converts into number while checking



// === means it will check value/data as well as types. will not converts value
console.log("2" === 2) // will return false 
console.log("2" == 2) // will return true 