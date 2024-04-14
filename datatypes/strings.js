
// string length 
const str1 = 'Life, the universe and everything. Answer:';
console.log(`${str1} ${str1.length}`);


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

// slice - cut a particular portion
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31)); // from char 31 to rest.
console.log(str.slice(4, 19)); // from char 4 to 19
console.log(str.slice(-4)); // from behind
console.log(str.slice(-9, -5));


// split - converts string into an array for a specific condition
const sp = "The quick brown fox jumps over the lazy dog.";
const sp_array = sp.split(" ");
// console.table(sp_array);
// for(word of sp_array){
//     console.log(word);
// }


// substring - cut a particular portion.
const browser = 'Mozilla';

console.log(browser.substring(1, 3)); // oz 
console.log(browser.substring(2)); // zilla


// toLowerCase() - converts to lowercase
const s = 'The quick brown fox jumps over the lazy dog.';
console.log(s.toLowerCase());

// trim - removes white spaces from both ends
const t = "  Hello World!   ";
console.log(t.trim());