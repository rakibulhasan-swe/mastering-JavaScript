// descriptor

// suppose i want to change the value of Math.PI - why i can not change it?

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

// it wont change. in both case it will show 3.14159...

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
this is the descriptor of Math.PI. we can see writable is false. so we can not overwrite this value.
*/

const user = {
    username: "Rakib",
    email: "rakib@gmail.com",
    isStudent: true
};
const userDescriptor = Object.getOwnPropertyDescriptor(user, "isStudent");
// console.log(userDescriptor); // { value: true, writable: true, enumerable: true, configurable: true }

user.isStudent = false;
// console.log(user); // - isStudent is false now


// what if i want it will not change.
Object.defineProperty(user, "isStudent", {
    writable: false
});

const newUserDescriptor = Object.getOwnPropertyDescriptor(user, "isStudent");
// console.log(newUserDescriptor);
user.isStudent = true;
console.log(user.isStudent); // it wont change




