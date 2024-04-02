// variables (that can vary over time) are basically a container that can store values.

// we can declare variables 4 ways in javascript

// by using var
// we can reassign a value.
// can redeclare that variable again.
var a = 10;
console.log(a);

// by using let
// we can reassign a value
// can not redeclare that variable again.
let name = "Rakib";
console.log(name);

// by using const
// can not reassign nor redeclare
const pi = 3.1416;
console.log(pi);

// nothing type declare
isTrue = true;
console.log(isTrue);



/*
Notes:
prefer not to use var because of block scoped and functional scoped.
*/