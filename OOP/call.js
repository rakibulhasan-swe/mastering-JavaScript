function SetUsername(username){
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password){
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const newUser = new createUser("rakib", "rakib@gmail.com", "345267");
console.log(newUser);

