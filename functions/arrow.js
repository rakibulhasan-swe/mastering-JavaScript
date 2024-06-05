const hello = () => {
    console.log("Hello Arrow function");
}

// one liner return
const getValue = () => 5;
// console.log(getValue());


// object return
const getObj = () => { 
    return {
        user: true,
        login: true
    };
}
console.log(getObj());

// object return another way
const getObj1 = () => ({
    user: true,
    login: true
});
console.log(getObj1());


const user = {
    userName: "Rakib",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website.`);
        // console.log(this);
    }
}

user.welcomeMessage();

// console.log(this) // empty object

// function tea(){
//     const username = "Rakib";
//     console.log(this); 
//     console.log(this.username);
// }
// tea();


const coffee = () => {
    let username = "Rakib";
    console.log(this.username);
}

// anonymous function
function returnFunction(){
    return () => {
        console.log("Hello");
    }
}