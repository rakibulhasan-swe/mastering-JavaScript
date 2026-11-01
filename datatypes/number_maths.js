let score = 30;
console.log(score);

let num = new Number(40.98000);
console.log(num.toFixed(2)); // round upto 2 values after point(.)

let num1 = 34.89540;
console.log(num1.toPrecision(2)); // round up value upto 2values


const million = 1000000;
console.log(million.toLocaleString());




// Maths library
console.log(Math); // objects
console.log(Math.PI);

console.log(Math.abs(-23)); // converts negative value into positive
console.log(Math.round(4.6)); // rounded value
console.log(Math.floor(4.999)); // 4
console.log(Math.ceil(5.01)); // 6
console.log(Math.min(1, 3, 0, 3, 5)); // 0
console.log(Math.min(1, 3, 0, 3, 5)); // 5

console.log(Math.floor(Math.random()*10));

// range based random value generator
let min = 10, max = 20;
const rangeValue = Math.floor(Math.random()*(max - min + 1) + min);
console.log(rangeValue);


