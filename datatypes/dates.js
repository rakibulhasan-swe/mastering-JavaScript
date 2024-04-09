// dates

const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleString());

console.log(typeof date); // objects


let newDate = new Date(2024, 3, 14); // my birthday
console.log(newDate.toDateString());


const dates = new Date("2024-04-14");
console.log(dates.toLocaleString());


// timestamp
const timeStamp = Date.now();
console.log(timeStamp);

