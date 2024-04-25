// promises are used to either complete/reject a asyncronous task. It has three phases
// pending state - success state - error state

const promiseA = new Promise((resolve, reject) => {
    let isAdmin = false;
    if(isAdmin) {
        setTimeout(() => {
            resolve("Success!!");
        }, 1000)
    }else{
        reject("Erorr!!!");
    }
});

// console.log(promiseA); // it will show pending state
promiseA
.then((res) => console.log(res))
.catch((err) => console.log(err))



// another way of writting promise
new Promise((resolve, reject) => {
    let isValid = false;
    
    if(isValid) {
        setTimeout(() => {
            resolve({"userName": "Rakib", "email": "rakib@gmail.com"});
        }, 1000)
    }else {
        reject({"message": "404! Not Found."});
    }
})
.then((res) => console.log(res))
.catch((err) => console.log(err.message))


