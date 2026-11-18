// function declaration or function definition
function sayHello(){
    console.log('Hello User!!');
};

// function expression - any function that is stored in a variable.
const add = function (a, b){
    console.log(a+b);
};

const multiply = function (a, b){
    return a * b;
};

function division (a, b){
    return a / b;
};
const div = division; // one kind of function expression.

// anonymous function can be function expression as well
const sub = function(a, b){
    return a - b;
};

// arrow function as function expression
const modulo = (a, b) => {
    return a % b;
};

// anonymous function - any kind of function that has no name
(function (){
    console.log("Anonymous function!!");
});


// IIFEE - Immediately invoked function expression.
(function (){
    console.log("IIFEE");
})();