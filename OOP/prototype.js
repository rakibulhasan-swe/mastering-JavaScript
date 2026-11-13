let myHeros = ["thor", "ironman"];

let heroPower = {
    thor: "hammer",
    ironman: "technology",

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    }
};

Object.prototype.rakib = function(){
    console.log(`Rakib is present in all object!!`);
};

heroPower.rakib();
myHeros.rakib();


Array.prototype.sayHello = function(){
    console.log("Hello from Array!!");
};
myHeros.sayHello();
// heroPower.sayHello();


// inheritance
const User = {
    name: "Rakib",
    email: "rakib@gmail.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
};

Teacher.__proto__ = User;

// modern type
Object.setPrototypeOf(TeachingSupport, Teacher);

let myName = "Rakib   ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength();
