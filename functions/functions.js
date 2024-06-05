// function defenition
function sayHello(){
    console.log("Hello User!");
}

// sayHello // reference
// console.log(sayHello);
sayHello(); // execution


function addTwoNumbers(one, two){
    return one+two;
}
console.log(addTwoNumbers(12, 56));

// function expression
const hello = function () {
    console.log("Hello There");
}

// named function expression
const hello1 = function hello() {
    console.log("Named function expression");
}


// difference between function expression and function declaration



// interview type questions --
function first(){
    return "First!!!";
}
function second(){
    return "Second!!";
}

const message = first() && second();
console.log(message);