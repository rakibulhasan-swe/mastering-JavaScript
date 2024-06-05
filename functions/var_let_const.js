var a = 10;
var a = 22; // can redeclare

let b = 20;
// let b = 12; // Cannot redeclare block-scoped variable 'b'
const c = 30;
// const c = 23; // // Cannot redeclare block-scoped variable 'c'

a = 11;
b = 12;
// c = 12; // can not reassign to a constant variable

// console.log(a, b, c);


if(true){
    var name = "Rakib"; // it is accessible outside this block
    let name1 = "Nayeem";
    const name2 = "Saim";
}

// console.log(name, name1, name2);

function getValue(){
    var val1 = 23;
    let val2 = 23;
    const val3 = 23;
}
console.log(val1, val2, val3); // none of this is accessible

/*
1. variables can redeclare if it is declared using var but you can not redeclare using let and const
2. var is function scoped whereas let and const is block scoped.
3. const is not reassignable but let and var is reassignable.
*/

