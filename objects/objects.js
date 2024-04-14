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



