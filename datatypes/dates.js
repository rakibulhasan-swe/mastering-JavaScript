// dates

const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleString());

console.log(typeof date); // objects


let newDate = new Date(2024, 3, 14);
console.log(newDate.toDateString());


const dates = new Date("2024-04-14");
console.log(dates.toLocaleString());


// timestamp
const timeStamp = Date.now();
console.log(timeStamp);
console.log(newDate.getTime()); // miliseconds

console.log(Math.floor(Date.now()/1000)); // seconds

const dateNew = new Date();
console.log(dateNew.getMonth());
console.log(dateNew.getDay());

