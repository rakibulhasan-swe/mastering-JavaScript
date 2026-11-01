// array - collection of data stored into a variable
// JavaScript array is resizable

const numbers = [1, 2, 3, 5];
console.log(numbers[0]);

// push - insert element at last position
numbers.push(20);
numbers.push(30);
numbers.push(89);

// pop - remove element from last
numbers.pop();

// unshift - insert element at first position
numbers.unshift(19);
numbers.unshift(45);

// shift - removes element from the first
numbers.shift();

// length - return size of the array
console.log(numbers.length);

console.log(typeof numbers); // object


console.log(numbers.includes(5)) // will return true
console.log(numbers.includes(9)) // will return false

const newArr = numbers.join();
console.log(numbers);
console.log(newArr); // coma separated strings

// sort - sort in ascending order
console.log(numbers.sort((a, b) => a-b));

// array type checking
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // returns either true or false


// slice and splice
const myn1 = numbers.slice(1, 3);
console.log(myn1);
console.log(numbers);

const myn2 = numbers.splice(1, 3);
console.log(myn2);
console.log(numbers);

/*
    -> splice includes ending index whereas slice doesnt includes
    -> splice changes mai array, slice doesnt changes main array
*/


// iterate through arrays - for of loop
const arrayA = [1, 2, 3, 4, 5, 6, 7];
for(const num of arrayA){
    console.log(num);
}

// we can also iterate throgh the array by using for in loop
const arrayB = [1, 2, 3, 4, 5];
for (const key in arrayB) {
    console.log(arrayB[key]);
}