// two types of data types

/* 
1. Primitive Data types
    Undefined
    number
    string
    boolean
    symbol

2. Non-primitive/Referece type
    Object
    Function
    Arrays
*/

let a = 10;
let b = a;

b++;
console.log(a);
console.log(b);

// look the b value is changed but the value of remains same bcz b is just getting the value of a. not the memory address/reference

const num = [1, 2, 4];
const num1 = num; // now num1 shares the same reference of num

num1.push(9);
console.log(num);
console.log(num1);

// look num and num1 are same. bt we only does operation to num1. it is because of num1 and num pointing to same reference - (this is also called shwallo copy).


// Mutable vs Immutable
// Primitives are immutable

let name = "Rakib";
name[0] = "S"; // it wont change
console.log(name);

// but reassignment is not same as mutable/immutable
name = "Nayeem";
console.log(name); // it will change


// structures contains mutable data
const roll = [1, 2, 3, 4];
roll[0] = 9;
console.log(roll);


// pure functions requires to avoid mutating the data


// impure functions that mutates data
const numberList = (array, value) => {
    array.push(value);
    return array;
}

// mutates the original array
const num3 = [1, 2, 3];
console.log(numberList(num3, 12));


// shallow copy vs deep copy (clones)


// shallow copy - did not shares same reference
const newArr = [...num3, 23, 21]; // here num3 and newArr does not refers same ref
newArr.push(10); // wont occur change in num3 array
console.log(newArr);

// Note: if there is nested arrays - it will still shares same reference (only the nested array not outer array);
const f = [2, 3, 5];
f.push([1, 2, 3]);
const g = [...f];

g[3].push(10);
console.log(g);
console.log(f);

// Note: shallow copy stills share same reference when it is nested structures which allows for mutation of the original data


// deep copy - shares no reference




