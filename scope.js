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

console.log(a, b, c); // error - b and c is not defined

/*
    Scope:
        The area where a variable is accessible.

    Scope Chain:
        The chain of scopes JavaScript searches when resolving a variable.


        Variable lookup:
            Current scope
                ↓
            Parent scope
                ↓
            Parent's parent scope
                ↓
            Global scope
                ↓
            If not found → ReferenceError
    */