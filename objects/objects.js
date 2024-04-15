// singleton - when we construct object using constructor
// object.create

// objects literals

const mySym = Symbol("key1");

const user = {
    name: "Rakib",
    age: 25,
    university: "Southeast",
    isLoggedIn: true,
    location: "Joypurhat",
    email: "rakib@gmail.com",
    lastLoginDays: ["Satarday", "Wednesday"],
    [mySym]: "Symbol", // ways of define symbol as a key
    "full name": "Md. Rakibul Hasan", // can not access this using dot notation
    greeting: function(){
        console.log(`Hello, ${this.name}`);
    }
};

// keys - values
console.log(Object.keys(user)); // returns array of keys
console.log(Object.values(user)); // returns values

// ways of accesing objects
console.log(user["email"]);
console.log(user.location);
console.log(user[mySym]);
console.log(user["full name"]);

// changing existing values
user.email = "nayeem@gmail.com";

// Object.freeze(user);

// user.name = "nayeem"; // will not change the value bcz of freeze
// console.log(user);

user.greeting();


const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Nayeem",
            lastName: "Sorowar"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);
// ? -> optional chaining - if the value can not exist then it will not crash.
console.log(regularUser?.fullName?.userFullName?.lastName);


const obj1 = {
    name: "Smith",
    isCricketer: true
};
const obj2 = {
    name1: "Neymar",
    isFootballer: true
};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2}; // using spread operator


// destructuring
const course = {
    courseName: "Mastering JS",
    price: "3999",
    instructor: "Md. Rakibul Hasan"
};

const {courseName, price, instructor} = course;
console.log(price, courseName, instructor);



