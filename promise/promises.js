// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls, crypto task, network call

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log("Promise Consume");
// })


// new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls, crypto task, network call

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Promise Consume");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Rakib", email: "rakib@gmail.com"});
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Rakib", password: "12341526"});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("All Promise done!!");
})

