# What is JavaScript?

JavaScript is a **dynamically typed, single-threaded, synchronous by default, high-level programming language**.

It is mainly used to make websites interactive, but nowadays JavaScript can also be used for:

* Frontend development
* Backend development
* Mobile development
* Desktop applications
* APIs
* Automation
* Real-time applications

### Dynamically Typed

JavaScript is dynamically typed because we **do not need to define the type of a variable manually**.

The type is determined at runtime.

```js
let age = 25;
age = "Rakib";
```

Here, `age` first contains a number and later contains a string.

We don't write:

```js
int age = 25;
```

like we do in some statically typed languages.

---

### Single Threaded

JavaScript is **single-threaded**, which means it has one main thread of execution.

So, JavaScript normally executes **one piece of JavaScript code at a time**.

```js
console.log("Hello");

console.log("World");

console.log("JavaScript");
```

Output:

```text
Hello
World
JavaScript
```

We can think of it like:

```text
             JavaScript
                  |
                  v
           One Main Thread
                  |
        ---------------------
        |         |         |
       Line 1    Line 2    Line 3
        |
        v
     Execute
        |
        v
     Execute
        |
        v
     Execute
```

> **Interview point:** Single-threaded does NOT mean JavaScript cannot handle multiple things at the same time. JavaScript runtime environments provide mechanisms such as the **Web APIs, callback queue, task queue and event loop** to handle asynchronous operations.

---

### Synchronous

JavaScript code is **synchronous by default**.

This means code is normally executed **one statement after another**.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

The next statement normally waits for the previous statement to finish.

However, JavaScript also supports **asynchronous operations**.

Example:

```js
console.log("Start");

setTimeout(() => {
    console.log("After 2 seconds");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
After 2 seconds
```

So remember:

> **JavaScript execution is synchronous by default, but JavaScript runtimes provide asynchronous capabilities.**

---

# JavaScript Engine

A **JavaScript Engine** is a program that reads, analyzes, and executes JavaScript code.

Different browsers use different JavaScript engines.

| Browser / Runtime | JavaScript Engine |
| ----------------- | ----------------- |
| Chrome            | V8                |
| Node.js           | V8                |
| Firefox           | SpiderMonkey      |
| Safari            | JavaScriptCore    |
| Edge              | V8                |

For example:

```text
JavaScript Code
       |
       v
 JavaScript Engine
       |
       v
   Machine Code
       |
       v
      CPU
```

The engine is responsible for converting our JavaScript code into instructions that the computer can execute.

### V8

**V8** is Google's JavaScript engine.

It is used by:

* Google Chrome
* Node.js
* Chromium-based environments

---

# ECMAScript

**ECMAScript** is the **standard/specification** that defines how JavaScript should work.

JavaScript is an implementation of the ECMAScript specification.

Think about it like this:

```text
ECMAScript
   |
   | defines rules
   v
JavaScript
   |
   | implemented by
   v
JavaScript Engines
   |
   +------ V8
   +------ SpiderMonkey
   +------ JavaScriptCore
```

### ECMAScript vs JavaScript

A simple way to remember:

> **ECMAScript = specification**
>
> **JavaScript = implementation/language based on that specification**

ECMAScript defines things such as:

* Variables
* Functions
* Objects
* Classes
* Promises
* Modules
* Syntax
* Data types
* Operators
* New language features

For example, when features such as `let`, `const`, arrow functions, classes, promises, etc. are standardized, JavaScript engines implement those features.

---

# Interpreted vs Compiled

There are two traditional ways of executing programming languages.

## Interpreted Language

In an interpreted approach, the source code is executed by an interpreter at runtime.

Conceptually:

```text
Source Code
    |
    v
Interpreter
    |
    v
Execute
```

The interpreter reads the code and executes it.

---

## Compiled Language

In a compiled approach, the source code is converted into machine code before execution.

```text
Source Code
    |
    v
Compiler
    |
    v
Machine Code
    |
    v
Execute
```

Languages like C and C++ traditionally use this model.

---

# Is JavaScript Interpreted or Compiled?

This is a common **interview question**.

The simple answer:

> JavaScript is traditionally called an interpreted language, but modern JavaScript engines use both interpretation and compilation techniques.

Modern engines don't simply interpret every line forever.

They use techniques such as:

* Parsing
* Bytecode generation
* Interpretation
* JIT compilation
* Optimization
* Deoptimization

So saying:

> "JavaScript is only an interpreted language"

is an **oversimplification** for modern JavaScript.

---

# JIT — Just-In-Time Compilation

**JIT** means **Just-In-Time Compilation**.

Modern JavaScript engines use JIT compilation to make JavaScript execution faster.

The basic idea is:

```text
JavaScript Source Code
          |
          v
        Parser
          |
          v
      Bytecode
          |
          v
     Interpreter
          |
          v
   Frequently used code
          |
          v
    JIT Compiler
          |
          v
    Optimized Machine Code
```

The engine observes which parts of the code are being executed frequently.

Those parts can be optimized and compiled into faster machine code.

### Simple Example

```js
function add(a, b) {
    return a + b;
}

add(10, 20);
add(20, 30);
add(30, 40);
```

If a function is called many times, the JavaScript engine can recognize that it is "hot" code and optimize its execution.

> **Interview point:** JIT compilation helps modern JavaScript engines improve performance by compiling frequently executed code into optimized machine code at runtime.

---

# Foundation of JavaScript

Now let's start with the basic building blocks of JavaScript.

Some important foundations are:

* Variables
* Data Types
* Operators
* Conditional Statements
* Loops
* Functions
* Objects
* Arrays
* Scope
* Closures
* Asynchronous JavaScript
* DOM
* etc.

---

# Variables

A **variable** is basically a container that can store a value.

The value stored inside a variable can change over time.

Example:

```js
let age = 25;

age = 26;
```

Here:

```text
age
 |
 v
25
```

Later:

```text
age
 |
 v
26
```

So we can think of a variable as a **named reference to a value**.

---

# Variable Declaration

In JavaScript, we mainly use **3 keywords** to declare variables:

```js
var
let
const
```

> Note: There are **3 variable declaration keywords**, not 4.

---

# `var`

`var` is the older way of declaring variables in JavaScript.

Example:

```js
var age = 25;
```

### Reassign

We can change the value of a `var` variable.

```js
var age = 25;

age = 30;

console.log(age);
```

Output:

```text
30
```

### Redeclare

We can also declare the same `var` variable again in the same scope.

```js
var age = 25;

var age = 30;

console.log(age);
```

Output:

```text
30
```

This is one of the reasons `var` can sometimes create unexpected behavior.

---

# `let`

`let` was introduced in **ES6 / ECMAScript 2015**.

Example:

```js
let age = 25;
```

### Reassign

We can reassign a `let` variable.

```js
let age = 25;

age = 30;

console.log(age);
```

Output:

```text
30
```

### Redeclare

But we **cannot redeclare** a `let` variable in the same scope.

```js
let age = 25;

let age = 30;
```

This gives an error.

So:

```text
let
 |
 +-- Reassign     ✅
 |
 +-- Redeclare    ❌ (same scope)
```

---

# `const`

`const` is used when we don't want to **reassign the variable**.

Example:

```js
const age = 25;
```

We cannot do:

```js
const age = 25;

age = 30;
```

This gives an error because a `const` variable cannot be reassigned.

So:

```text
const
 |
 +-- Reassign     ❌
 |
 +-- Redeclare    ❌
```

---

# Difference Between `var`, `let` and `const`

This is a very important **interview question**.

| Feature              | `var` | `let`  | `const` |
| -------------------- | ----- | ------ | ------- |
| Reassign             | ✅ Yes | ✅ Yes  | ❌ No    |
| Redeclare same scope | ✅ Yes | ❌ No   | ❌ No    |
| Block scoped         | ❌ No  | ✅ Yes  | ✅ Yes   |
| Function scoped      | ✅ Yes | ❌      | ❌       |
| Hoisted              | ✅ Yes | ✅ Yes* | ✅ Yes*  |

`*` `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until their declaration is reached.

---

# Block Scope

`let` and `const` are **block scoped**.

A block is created using `{ }`.

Example:

```js
{
    let x = 10;
    const y = 20;
}

console.log(x); // Error
console.log(y); // Error
```

The variables only exist inside that block.

But `var` does not follow block scope.

```js
{
    var x = 10;
}

console.log(x);
```

Output:

```text
10
```

This is because `var` is **function scoped**, not block scoped.

---

# Function Scope

`var` is function scoped.

Example:

```js
function test() {

    var x = 10;

    console.log(x);
}

test();
```

`x` exists inside the function.

But outside:

```js
console.log(x);
```

will give an error.

---

# Hoisting

JavaScript moves certain declarations to the top of their scope during the creation phase of execution.

This behavior is called **hoisting**.

Example with `var`:

```js
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

Conceptually, JavaScript behaves somewhat like:

```js
var x;

console.log(x);

x = 10;
```

But `let` and `const` behave differently.

```js
console.log(x);

let x = 10;
```

This gives an error.

The reason is the **Temporal Dead Zone (TDZ)**.

---

# Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between entering a scope and reaching the declaration of a `let` or `const` variable.

Example:

```js
console.log(age);

let age = 25;
```

The variable exists in the scope, but we cannot access it before its declaration is executed.

So:

```text
Scope starts
     |
     v
  TDZ starts
     |
     |
     |  Cannot access variable
     |
     v
let age = 25;
     |
     v
  TDZ ends
     |
     v
Variable can be accessed
```

This is why:

```js
console.log(age);
let age = 25;
```

results in:

```text
ReferenceError
```

---

# Which One Should We Use?

In modern JavaScript:

### Use `const` by default

```js
const name = "Rakib";
```

If the variable needs to be reassigned, use `let`.

```js
let score = 0;

score++;
```

Avoid `var` in modern JavaScript unless you have a specific reason to use it or you are working with older code.

A simple rule:

```text
Need to reassign?
       |
   Yes | No
       | 
       v
      let       const
```

### Practical Rule

```js
const name = "Rakib";
const age = 25;

let score = 0;

score = 10;
```

Here:

* `name` → `const` because it won't be reassigned
* `age` → `const` because it won't be reassigned
* `score` → `let` because its value changes

---

# Interview Quick Revision

### What is JavaScript?

> JavaScript is a high-level, dynamically typed programming language that is single-threaded and synchronous by default, while supporting asynchronous operations through its runtime environment.

### What is ECMAScript?

> ECMAScript is the specification/standard that defines the core features and behavior of JavaScript.

### What is a JavaScript Engine?

> A JavaScript engine is a program that parses and executes JavaScript code. Examples include V8, SpiderMonkey and JavaScriptCore.

### Is JavaScript interpreted or compiled?

> Modern JavaScript engines use a combination of interpretation and JIT compilation techniques, so calling JavaScript purely interpreted is an oversimplification.

### What is JIT?

> JIT stands for Just-In-Time compilation. It compiles frequently executed JavaScript code into optimized machine code at runtime to improve performance.

### How many variable declaration keywords are there?

> Three: `var`, `let`, and `const`.

### Difference between `var`, `let`, and `const`?

> `var` is function scoped and can be redeclared and reassigned. `let` is block scoped and can be reassigned but not redeclared in the same scope. `const` is block scoped and cannot be reassigned or redeclared.

### What is TDZ?

> Temporal Dead Zone is the period between entering a scope and reaching the declaration of a `let` or `const` variable, during which accessing that variable causes a `ReferenceError`.
