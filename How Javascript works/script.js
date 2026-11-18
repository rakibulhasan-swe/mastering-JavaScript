console.log(a); // undefined

var a = 19;

function add (x, y) {
    var z = x + y;
    console.log(z);
}

console.log(a); // 10

var b = 17;

add(10, 20); // console.log(add); // function definition

console.log(b); // 17

/*
    1. Global execution context
        parts:
            1. Memory component or variable component
            2. Code component or thread of execution
        Phase:
            1. Creation phase or memory creation phase
            2. Execution phase or Code execution phase

    After successfully run a Javasscript program:
        1. First Create Global execution context and its two parts.
        2. Creation phase.
        3. Execution phase.

    -> Local execution context or function execution context.
        - note: A function execution context is created when a function is invoked/called.

    * JavsScript visualizer
        pythontutor.com
    
    -> Execution Context is created and then pushed onto the Call Stack, And after execution popped from Call Stack.

    Execution Context
       ↓
        created
       ↓
    pushed onto Call Stack
       ↓
        executed
       ↓
    popped from Call Stack
*/