
// string length 
const str = 'Life, the universe and everything. Answer:';
console.log(`${str} ${str.length}`);


// positioned value
let universityName = "Southeast University";
console.log(universityName.charAt(0)); // returned the value of that position
console.log(universityName.charAt(30)); // returns empty if it is out of range


// concat - joins two strings
let firstName = "Md. Rakibul", lastName = " Hasan.";
let fullName = firstName.concat(lastName);
console.log(fullName);


// charCodeAt() - returns ascii value of a character
let ascii = "abcde";
console.log(ascii.charCodeAt(0));


// endsWith(searchString, endPosition)
//endsWith() - returns true/false if it found/not found.
let str2 = 'Is this a question?';
let isTrue = str2.endsWith("question?");
let isTrue1 = str2.endsWith("question", 18); // second parameters defines the expected ending position of the string
console.log(isTrue, isTrue1);


// better version for searching in s string. returns true/false upon operation
const sentence = 'The quick brown fox jumps over the lazy dog.';
const searchFor = "Fox";
const res = sentence.includes(searchFor);
console.log(res);
console.log(sentence.includes(searchFor.toLowerCase())); // lower case searching

// 