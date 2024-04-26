
class User{
    constructor(userName, email, password){
        this.userName = userName,
        this.email = email,
        this.password = password
    }
    encryptPassword() {
        return `c${this.password}ab`;
    }
    upperUsername() {
        return `${this.userName.toUpperCase()}`;
    }
}

const user1 = new User("Rakib", "rakib@gmail.com", "1234");
console.log(user1.encryptPassword());
console.log(user1.upperUsername());