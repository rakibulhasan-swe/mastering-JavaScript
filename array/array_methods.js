// concat - returns a new array of combined arrays
const a = [1, 2, 3];
const b = [4, 5, 1];
const c = a.concat(b);

// console.log(c); // returns a new array. doesnot effect main array


// for Each method - loop throgh the original array - it returns undefined
const coding = ["js", "c++", "java", "Go", "rust"];
coding.forEach((item) => console.log(item));

// coding.forEach((item, idx, arr) => console.log(item, idx, arr));



// filter - return a new array which met the conditions
const myNums = [1, 2, 3, 4, 5, 6, 7, 8];
const filteredNums = myNums.filter((num) => num >= 5);
// console.log(filteredNums);


// foreach act as filter - 
const newNum = [];
myNums.forEach((n) => {
    if(n > 5){
        newNum.push(n);
    }
});
// console.log(newNum);


// find - Returns the value of the first element in the array where predicate/condition is true, and undefined otherwise.
const numFind = [1, 23, 12, 23, 12, 12, 11];
const result = numFind.find((val) => val==12);
console.log(result);

