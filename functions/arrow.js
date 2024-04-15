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