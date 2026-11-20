var a = 10;

function outer(){
    console.log(a); // 10
    var b = 20;

    function inner(){
        var c = 17;
        console.log(a, b, c); // 10 20 17
    }
    inner();
}

outer();

// console.log(a, b, c); // error - b and c is not defined

/*
    lexical environment -> Execution context er memory component + parent execution context er lexical environment.

*/

var e = 10;

function outer1(){
    var f = 12;
    console.log(e);

    function inner1(){
        console.log(e);
        console.log(f);
    }
    return inner1;
}

var g = outer1();

g();


// closure -> function + Lexical environment